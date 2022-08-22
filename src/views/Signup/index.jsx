import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import useSagaCreators from 'hooks/useSagaCreators';
import { GetAuthSelector } from 'redux/selectors';
import { signupActions } from 'redux/modules/signup';
import { RouteBase } from 'constants/routeUrl';

import CommonStyles from 'components/CommonStyles';
import CommonIcons from 'components/icons';
import { passwordRegex } from 'constants';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { LinearProgress, Box } from '@mui/material';
import { useState } from 'react';
// import langServices from 'services/langServices';

const SignupPage = () => {
  //! State
  const { isLogin } = GetAuthSelector();
  const { t } = useTranslation();
  const { dispatch } = useSagaCreators();

  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState(null);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(t('messages:wrong-format', { key: t('common:email') }))
      .required(t('messages:required_field', { key: t('common:email') })),

    name: yup.string().required(t('messages:required_field', { key: t('common:name') })),

    password: yup
      .string()
      .matches(passwordRegex, t('messages:wrong-format', { key: t('common:password') }))
      .required(t('messages:required_field', { key: t('common:password') })),

    reEnterPassword: yup
      .string()
      .matches(passwordRegex, t('messages:wrong-format', { key: t('common:password') }))
      .required(t('messages:required_field', { key: t('common:re-enter-password') })),
  });

  //! Function
  if (isLogin) {
    return <Redirect to={RouteBase.Login} />;
  }

  //! Rendert

  return (
    <div className="login-container">
      <LinearProgress />
      <div className="login-form">
        <Formik
          initialValues={{
            email: '',
            name: '',
            password: '',
            reEnterPassword: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            setIsLogging(true);
            setError(null);
            if (values.password === values.reEnterPassword) {
              try {
                dispatch(signupActions.signup, {
                  email: values.email,
                  name: values.name,
                  password: values.password,
                  callbacks: {
                    onSuccess: () => {
                      setIsLogging(false);
                    },
                    onFailed: (error) => {
                      setIsLogging(false);
                      setError(error);
                    },
                  },
                });
              } catch (error) {}
            } else {
              alert('Password not match');
            }
          }}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <h1 className="header">{t('messages:login-title')}</h1>

                <div className="inputField">
                  <Field
                    name="email"
                    component={CommonStyles.Input}
                    icon={<CommonIcons.Mail />}
                    placeholder={t('messages:email-placeholder')}
                    label={t('common:email-label')}
                  />
                </div>

                <div className="inputField">
                  <Field
                    name="name"
                    component={CommonStyles.Input}
                    icon={<CommonIcons.User />}
                    placeholder={t('messages:name-placeholder')}
                    label={t('common:name')}
                  />
                </div>

                <div className="inputField">
                  <Field
                    name="password"
                    type="password"
                    component={CommonStyles.Input}
                    icon={<CommonIcons.Password />}
                    placeholder={t('messages:password-placeholder')}
                    label={t('common:password')}
                  />
                </div>

                <div className="inputField">
                  <Field
                    name="reEnterPassword"
                    type="password"
                    component={CommonStyles.Input}
                    icon={<CommonIcons.Password />}
                    placeholder={t('messages:reenter-password-placeholder')}
                    label={t('common:re-enter-password')}
                  />
                </div>

                <CommonStyles.Button
                  color="primary"
                  innerText={t('common:submit')}
                  borderRadius="round"
                  style={{ width: '100%' }}
                  disabled={isLogging}
                />

                <div className="createAcc">
                  <span className="question">{t('messages:already-have-acc')}</span>
                  <Link to="/login">{t('messages:sign-in')}</Link>
                </div>
                <div className="errorMess">
                  {isLogging && (
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress />
                    </Box>
                  )}
                  {error && <span className="error">{error}</span>}
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <div className="login-image"></div>
    </div>
  );
};

export default SignupPage;
