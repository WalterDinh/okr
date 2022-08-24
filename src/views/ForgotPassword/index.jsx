import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import CommonStyles from 'components/CommonStyles';
import CommonIcons from '../../components/icons';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  const history = useHistory();

  //! State

  //! Function
  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('messages:wrong-format', { key: t('common:email') }))
      .required(t('messages:required_field', { key: t('common:email') })),
  });

  //! Render
  return (
    <div className="container-auth">
      <div className="form-auth">
        <Formik
          initialValues={{ email: '' }}
          validationSchema={ForgotPasswordSchema}
          onSubmit={(values, actions) => {
            history.push('/reset-password');
          }}
        >
          <Form>
            <h1 className="heading">{t('forgotpassword:ForgotPassword')}</h1>
            <h3 className="description-heading">{t('forgotpassword:ImportEmailToRestorePassword')}</h3>
            <Field
              name="email"
              component={CommonStyles.Input}
              placeholder={t('messages:input-placeholder', { key: t('common:email') })}
              label={t('common:email')}
              icon={<CommonIcons.Mail />}
            />
            <CommonStyles.Button
              style={{ width: '100%', marginTop: '16px' }}
              color="primary"
              borderRadius="round"
              innerText={t('forgotpassword:Next')}
            />
          </Form>
        </Formik>
      </div>
      <div className="image-form-auth"></div>
    </div>
  );
};

export default ForgotPasswordPage;
