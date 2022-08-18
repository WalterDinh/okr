import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CommonStyles from 'components/CommonStyles';
import { MdMailOutline } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  //! State

  //! Function
  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email(t('forgotpassword:InvalidEmail')).required(t('forgotpassword:RequiredEmail')),
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
            <h1 className="heading">{t('forgotpassword:ForgotPassword')}</h1>
            <h3 className="description-heading">{t('forgotpassword:ImportEmailToRestorePassword')}</h3>
            <Field
              name="email"
              placeholder={t('forgotpassword:PlaceholderEmail')}
              component={CommonStyles.Input}
              label={t('forgotpassword:EmailLabel')}
              icon={<MdMailOutline />}
            />
            <CommonStyles.Button
              style={{ width: '100%', marginTop: '16px' }}
              type="primary"
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
