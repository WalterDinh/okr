import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, FastField } from 'formik';
import ErrorFocus from 'components/ErrorFocus';
import InputField from 'components/CustomField/InputField';
import { GetAuthSelector } from 'redux/selectors/auth';
import { Redirect } from 'react-router-dom';
import { RouteBase } from 'constants/routeUrl';
import useSagaCreators from 'hooks/useSagaCreators';
import { authActions } from 'redux/modules/auth';

const LoginPage = (props) => {
  const { dispatch } = useSagaCreators();
  const auth = GetAuthSelector();
  const { isLogin } = auth;

  if (isLogin) {
    return <Redirect to={RouteBase.Home} />;
  }

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={(values) => {
        const { username, password } = values;
        try {
          //* 1 Call API Login
          dispatch(authActions.login, {
            username,
            password,
            callbacks: {
              onSuccess: () => {},
              onFailed: () => {},
            },
          });
        } catch (error) {}
      }}
    >
      {(propsFormik) => (
        <Form>
          <ErrorFocus />
          <div>username: don & password: don</div>
          <div>
            <label htmlFor="username">UserName</label>
            <FastField component={InputField} name="username" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <FastField component={InputField} name="password" type="password" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default LoginPage;
