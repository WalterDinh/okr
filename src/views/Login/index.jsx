import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import CommonStyles from 'components/CommonStyles';
import CommonIcons from 'components/icons';
import { Link, Redirect } from 'react-router-dom';
import useSagaCreators from 'hooks/useSagaCreators';
import { RouteBase } from 'constants/routeUrl';
import { authActions } from 'redux/modules/auth';
import { GetAuthSelector } from 'redux/selectors/auth';
import { Box, LinearProgress } from '@mui/material';
import langServices from 'services/langServices';
import { useState } from 'react';

const LoginPage = () => {
  //! State
  const auth = GetAuthSelector();
  const { isLogin } = auth;
  const [isLogging, setIsLogging] = useState(false);
  const [error, setError] = useState(null);

  const { t } = useTranslation();
  const { dispatch } = useSagaCreators();
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(t('messages:wrong-format', { key: t('common:email') }))
      .required(t('messages:required_field', { key: t('common:email') })),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/,
        t('messages:wrong-format', { key: t('common:password') }),
      )
      .required(t('messages:required_field', { key: t('common:password') })),
  });

  //! Function

  if (isLogin) {
    return <Redirect to={RouteBase.Home} />;
  }

  //! Rendert
  return (
    <div className="login-container">
      <div className="login-form">
        <Formik
          initialValues={{
            email: '',
            password: '',
            keepLoggedIn: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const { email, password, keepLoggedIn } = values;
            try {
              setIsLogging(true);
              setError(null);
              dispatch(authActions.login, {
                email,
                password,
                keepLoggedIn,
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
          }}
        >
          {({}) => {
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
                    name="password"
                    type="password"
                    component={CommonStyles.Input}
                    icon={<CommonIcons.Password />}
                    placeholder={t('messages:password-placeholder')}
                    label={t('common:password')}
                  />
                </div>

                <div className="utilities">
                  <div className="remember">
                    <Field name="keepLoggedIn" component="input" type="checkbox" />
                    {t('messages:keep-logged-in')}
                  </div>
                  <Link to="/forgot-password">{t('messages:forgot-password')}</Link>
                </div>

                <CommonStyles.Button
                  type="primary"
                  innerText={t('common:submit')}
                  borderRadius="round"
                  style={{ width: '100%' }}
                />
                <div className="createAcc">
                  <span className="question">{t('messages:dont-have-acc')}</span>
                  <Link to="/sign-up">{t('messages:create-account')}</Link>
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

export default LoginPage;
