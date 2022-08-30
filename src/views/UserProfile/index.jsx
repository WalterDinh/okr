import React, { useState } from 'react';
import { Field, Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import CommonStyles from 'components/CommonStyles';
import CommonIcon from 'components/icons';
import { IconButton } from '@mui/material';

import { useRef } from 'react';
import { GetUserSelector } from 'redux/selectors';
import useGetListCompany from 'hooks/company/useGetListCompany';
import useSagaCreators from 'hooks/useSagaCreators';
import { userProfileActions } from 'redux/modules/userprofile';
import { Box, LinearProgress } from '@mui/material';
import { BASE_URL } from 'constants/api';
import useGetListDepartment from 'hooks/department/useGetListDepartments';

const styles = {
  inputForm: {
    width: '100%',
    height: '40px',
  },
};

const UserProfile = () => {
  //! State
  const { t } = useTranslation();
  const formikRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { dispatch } = useSagaCreators();
  const {
    full_name,
    email,
    gender: gender_id,
    date_of_birth,
    phone_number,
    company: company_id,
    department: department_id,
    img_url,
    id,
  } = GetUserSelector();
  const [listCompany] = useGetListCompany();
  const [listDepartment] = useGetListDepartment();

  const genderOptions = [
    {
      value: 1,
      label: t('common:male'),
    },
    {
      value: 2,
      label: t('common:female'),
    },
    {
      value: 3,
      label: t('common:undefined'),
    },
  ];

  const [userAvatar, setUseravatar] = useState(img_url);
  const initialValue = {
    full_name: full_name,
    email: email,
    gender: gender_id,
    phone_number: phone_number,
    date_of_birth: date_of_birth,
    company: company_id,
    position: '',
    department: department_id,
    supervisor: '',
  };
  const validationSchema = Yup.object().shape({
    full_name: Yup.string().required(t('messages:required_field', { key: t('common:name') })),
    email: Yup.string()
      .email(t('common:email-invalid'))
      .required(t('messages:required_field', { key: t('common:email') })),

    date_of_birth: Yup.date()
      .required(t('messages:required_field', { key: t('common:date_of_birth') }))
      .min(new Date(1900, 0, 1), t('common:date_of_birth-invalid'))
      .max(new Date(), t('common:date_of_birth-invalid')),
    phone_number: Yup.string().required(t('messages:required_field', { key: t('common:phone') })),
    position: Yup.string().required(t('messages:required_field', { key: t('common:position') })),
    company: Yup.string().required(t('messages:required_field', { key: t('common:company') })),
    department: Yup.string().required(t('messages:required_field', { key: t('common:department') })),
    supervisor: Yup.string().required(t('messages:required_field', { key: t('common:supervisor') })),
  });

  //!Function

  const handleChangeAvatar = (event) => {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    dispatch(userProfileActions.updateUserAva, {
      formData: formData,
      callbacks: {
        onSuccess: (img_url) => {
          setUseravatar(img_url);
        },
        onFailed: () => {
          setError(t('messages:submit-failed', { key: t('common:update') }));
        },
      },
    });
  };

  const handleReset = () => {
    if (formikRef.current && formikRef.current.dirty) {
      const confirm = window.confirm(t('messages:confirm-reset'));
      if (confirm) {
        formikRef.current.resetForm({ values: { ...initialValue } });
        setUseravatar(img_url);
      }
    }
    if (userAvatar !== img_url) {
      const confirm = window.confirm(t('messages:confirm-reset'));
      if (confirm) {
        setUseravatar(img_url);
      }
    }
  };

  const handleSubmit = (values) => {
    setIsLoading(true);
    const updateData = {
      ...values,
      id: id,
      img_url: userAvatar,
      date_of_birth: values.date_of_birth.toISOString().substring(0, 10),
    };
    dispatch(userProfileActions.updateUser, {
      id: id,
      data: updateData,
      callbacks: {
        onSuccess: () => {
          dispatch(userProfileActions.getUser, {
            id: id,
            callbacks: {
              onSuccess: () => {
                setIsLoading(false);
                setSuccess(true);
              },
              onFailed: () => {
                setError(t('messages:submit-failed', { key: t('common:update') }));
                setIsLoading(false);
              },
            },
          });
        },
        onFailed: () => {
          setError(t('messages:submit-failed', { key: t('common:update') }));
          setIsLoading(false);
        },
      },
    });
  };

  //! Render
  return (
    <div className="userProfile">
      <div className="userTitle">{t('common:user-profile')}</div>
      <div className="userContainer">
        <div className="userInfo">
          <div className="userAvatar" style={{ backgroundImage: `url(${BASE_URL}/${userAvatar})` }}>
            <div className="inputAva">
              <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" onChange={(e) => handleChangeAvatar(e)} />
                <CommonIcon.Camera />
              </IconButton>
            </div>
          </div>
          <div className="user">
            <div className="userName">{formikRef.current && formikRef.current.values.full_name}</div>
            <div className="userEmail">{formikRef.current && formikRef.current.values.email}</div>
          </div>
        </div>
        <Formik
          initialValues={initialValue}
          innerRef={formikRef}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {(props) => {
            return (
              <Form>
                {/* <Prompt when={props.dirty} message={'messages:dirty-alert'} /> */}
                <div className="userForm">
                  {/* Name */}
                  <div className="inputForm">
                    <Field
                      name="full_name"
                      component={CommonStyles.Input}
                      label={t('common:name')}
                      placeholder={t('messages:input-placeholder', { key: t('common:name') })}
                      style={styles.inputForm}
                    />
                  </div>

                  {/* Email */}
                  <div className="inputForm">
                    <Field
                      name="email"
                      component={CommonStyles.Input}
                      label={t('common:email')}
                      placeholder={t('messages:input-placeholder', { key: t('common:email') })}
                      style={styles.inputForm}
                    />
                  </div>

                  {/* Gender */}
                  <div className="inputForm">
                    <Field
                      name="gender"
                      component={CommonStyles.SelectInputForm}
                      label={t('common:gender')}
                      listOption={genderOptions}
                      style={styles.inputForm}
                    />
                  </div>

                  {/* Dob */}
                  <div className="inputForm">
                    <CommonStyles.DayPicker
                      name="date_of_birth"
                      label={t('common:date_of_birth')}
                      error={props.errors.date_of_birth}
                      value={props.values.date_of_birth}
                      maxDate={new Date()}
                      onChange={(value) => props.setFieldValue('date_of_birth', value)}
                    />
                  </div>

                  {/* Phone */}
                  <div className="inputForm">
                    <Field
                      name="phone_number"
                      component={CommonStyles.Input}
                      label={t('common:phone')}
                      placeholder={t('messages:input-placeholder', { key: t('common:phone') })}
                      style={styles.inputForm}
                    />
                  </div>
                </div>

                <div className="userForm">
                  {/* Company */}
                  <div className="inputForm">
                    <Field
                      name="company"
                      component={CommonStyles.SelectInputForm}
                      label={t('common:company')}
                      placeholder={t('messages:input-placeholder', { key: t('common:company') })}
                      listOption={listCompany}
                      style={styles.inputForm}
                    />
                  </div>

                  {/* department */}
                  <div className="inputForm">
                    <Field
                      name="department"
                      component={CommonStyles.SelectInputForm}
                      label={t('common:department')}
                      placeholder={t('messages:input-placeholder', { key: t('common:department') })}
                      listOption={listDepartment}
                      style={styles.inputForm}
                    />
                  </div>

                  {/* position */}
                  <div className="inputForm">
                    <Field
                      name="position"
                      component={CommonStyles.SelectInputForm}
                      label={t('common:position')}
                      value={props.values.position}
                      placeholder={t('messages:input-placeholder', { key: t('common:position') })}
                      listOption={[
                        {
                          value: 'position1',
                          label: 'position1',
                        },
                        {
                          value: 'position2',
                          label: 'position2',
                        },
                      ]}
                      style={styles.inputForm}
                    />
                  </div>

                  {/* supervisor */}
                  <div className="inputForm">
                    <Field
                      name="supervisor"
                      component={CommonStyles.Input}
                      label={t('common:supervisor')}
                      placeholder={t('messages:input-placeholder', { key: t('common:supervisor') })}
                      style={styles.inputForm}
                    />
                  </div>
                </div>
                <div className="userForm">
                  <div className="btnForm">
                    <CommonStyles.Button
                      color="secondary"
                      type="reset"
                      variant="contained"
                      innerText={t('messages:cancel')}
                      borderRadius="round"
                      style={{ width: '140px' }}
                      onClick={handleReset}
                      disabled={isLoading}
                    />
                    <CommonStyles.Button
                      color="primary"
                      type="submit"
                      variant="contained"
                      onClick={props.handleSubmit}
                      innerText={t('messages:save')}
                      borderRadius="round"
                      style={{ width: '140px' }}
                      disabled={isLoading}
                    />
                  </div>
                  <div className="notification">
                    {isLoading && (
                      <Box sx={{ width: '100%' }}>
                        <LinearProgress />
                      </Box>
                    )}
                    {success || error ? (
                      <div className={success ? 'success' : 'error'}>{success ? 'Update success' : error}</div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default UserProfile;
