import React, { useState } from 'react';
import { Field, Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import CommonStyles from 'components/CommonStyles';
import CommonIcon from 'components/icons';
import Avatar from '../../assets/User1.jpg';
import { IconButton } from '@mui/material';

import DayPicker from './DayPicker';
import { useRef } from 'react';

const styles = {
  inputForm: {
    width: '100%',
    height: '40px',
  },
};

const UserProfile = () => {
  //! State
  const { t } = useTranslation();
  const [userAvatar, setUseravatar] = useState(Avatar);
  const formikRef = useRef(null);
  const initialValue = {
    name: '',
    email: '',
    gender: 'male',
    phone: '',
    dob: new Date(),
    company: '',
    position: '',
    department: '',
    supervisor: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('messages:required_field', { key: t('common:name') })),
    email: Yup.string()
      .email(t('common:email-invalid'))
      .required(t('messages:required_field', { key: t('common:email') })),

    dob: Yup.date()
      .required(t('messages:required_field', { key: t('common:dob') }))
      .min(new Date(1900, 0, 1), t('common:dob-invalid'))
      .max(new Date(), t('common:dob-invalid')),

    phone: Yup.string().required(t('messages:required_field', { key: t('common:phone') })),
    company: Yup.string().required(t('messages:required_field', { key: t('common:company') })),
    position: Yup.string().required(t('messages:required_field', { key: t('common:position') })),
    department: Yup.string().required(t('messages:required_field', { key: t('common:department') })),
    supervisor: Yup.string().required(t('messages:required_field', { key: t('common:supervisor') })),
  });
  //!Function
  const handleChangeAvatar = (e) => {
    const { files } = e.target;
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUseravatar(e.target.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleReset = () => {
    if (formikRef.current && formikRef.current.dirty) {
      const confirm = window.confirm(t('messages:confirm-reset'));
      if (confirm) {
        formikRef.current.resetForm({ values: { ...initialValue } });
        setUseravatar(Avatar);
      }
    }
    if (userAvatar !== Avatar) {
      const confirm = window.confirm(t('messages:confirm-reset'));
      if (confirm) {
        setUseravatar(Avatar);
      }
    }
  };

  //! Render
  return (
    <div className="userProfile">
      <div className="userTitle">{t('common:user-profile')}</div>
      <div className="userContainer">
        <div className="userInfo">
          <div className="userAvatar">
            <img alt="avatar-user" src={userAvatar} />
            <div className="inputAva">
              <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" onChange={(e) => handleChangeAvatar(e)} />
                <CommonIcon.Camera />
              </IconButton>
            </div>
          </div>
          <div className="user">
            <div className="userName">User heheheh</div>
            <div className="userEmail">hehe@gmail.com</div>
          </div>
        </div>
        <Formik
          initialValues={initialValue}
          innerRef={formikRef}
          validationSchema={validationSchema}
          onSubmit={(values, action) => {
            action.resetForm({ values: { ...initialValue } });
          }}
        >
          {(props) => {
            return (
              <Form>
                <div className="userForm">
                  {/* Name */}
                  <div className="inputForm">
                    <Field
                      name="name"
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
                      value={props.values.gender}
                      listOption={[
                        {
                          value: t('common:male'),
                          label: t('common:male'),
                        },
                        {
                          value: t('common:female'),
                          label: t('common:female'),
                        },
                      ]}
                      style={styles.inputForm}
                    />
                  </div>

                  {/* Dob */}
                  <div className="inputForm">
                    <DayPicker
                      name="dob"
                      label={t('common:dob')}
                      error={props.errors.dob}
                      value={props.values.dob}
                      onChange={(value) => props.setFieldValue('dob', value)}
                    />
                  </div>

                  {/* Phone */}
                  <div className="inputForm">
                    <Field
                      name="phone"
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
                      value={props.values.company}
                      placeholder={t('messages:input-placeholder', { key: t('common:company') })}
                      listOption={[
                        {
                          value: 'OKRs1',
                          label: 'OKRs1',
                        },
                        {
                          value: 'OKRs2',
                          label: 'OKRs2',
                        },
                      ]}
                      style={styles.inputForm}
                    />
                  </div>

                  {/* department */}
                  <div className="inputForm">
                    <Field
                      name="department"
                      component={CommonStyles.SelectInputForm}
                      label={t('common:department')}
                      value={props.values.department}
                      placeholder={t('messages:input-placeholder', { key: t('common:department') })}
                      listOption={[
                        {
                          value: 'department1',
                          label: 'department1',
                        },
                        {
                          value: 'department2',
                          label: 'department2',
                        },
                      ]}
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
                <div className="btnForm">
                  <CommonStyles.Button
                    color="secondary"
                    type="reset"
                    variant="contained"
                    innerText={t('messages:cancel')}
                    borderRadius="round"
                    style={{ width: '140px' }}
                    onClick={handleReset}
                  />
                  <CommonStyles.Button
                    color="primary"
                    type="submit"
                    variant="contained"
                    onClick={props.handleSubmit}
                    innerText={t('messages:save')}
                    borderRadius="round"
                    style={{ width: '140px' }}
                  />
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
