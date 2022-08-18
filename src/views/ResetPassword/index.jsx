import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CommonStyles from 'components/CommonStyles';
import CommonIcons from '../../components/icons';
import { passwordRegex } from 'constants';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

const ResetPasswordPage = () => {
  const { t } = useTranslation();
  //! State

  //! Function
  const ForgotPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .matches(passwordRegex, t('messages:wrong-format', { key: t('common:password') }))
      .required(t('messages:required_field', { key: t('common:password') })),

    reEnterPassword: Yup.string()
      .matches(passwordRegex, t('messages:wrong-format', { key: t('common:password') }))
      .required(t('messages:required_field', { key: t('common:re-enter-password') })),
  });

  //! Render
  return (
    <div className="container-auth">
      <div className="form-auth">
        <Formik
          initialValues={{ email: '' }}
          validationSchema={ForgotPasswordSchema}
          onSubmit={(values, actions) => {}}
        >
          <Form>
            <h1 className="headingreset">{t('resetpassword:NewPassword')}</h1>
            <div className="inputField">
              <Field
                name="password"
                type="password"
                component={CommonStyles.Input}
                icon={<CommonIcons.Password />}
                placeholder={t('messages:password-placeholder')}
                label={t('resetpassword:new-password')}
              />
            </div>

              <Field
                name="reEnterPassword"
                type="password"
                component={CommonStyles.Input}
                icon={<CommonIcons.Password />}
                placeholder={t('messages:reenter-password-placeholder')}
                label={t('resetpassword:re-enter-new-password')}
              />
            <CommonStyles.Button
              style={{ width: '100%', height: '56px', marginTop: '32px' }}
              type="primary"
              borderRadius="round"
              innerText={t('common:submit')}
            />
          </Form>
        </Formik>
      </div>
      <div className="image-form-auth"></div>
    </div>
  );
};

export default ResetPasswordPage;
