import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import CommonStyles from 'components/CommonStyles';
import CommonIcons from '../../components/icons';
import { passwordRegex } from 'constants';
import { useTranslation } from 'react-i18next';

const OKRs = () => {
  const { t } = useTranslation();
  const history = useHistory();
  //! State

  //! Function
  const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
      .matches(passwordRegex, t('messages:wrong-format', { key: t('common:password') }))
      .required(t('messages:required_field', { key: t('common:password') })),

    reEnterPassword: Yup.string()
      .matches(passwordRegex, t('messages:wrong-format', { key: t('common:password') }))
      .required(t('messages:required_field', { key: t('common:re-enter-password') })),
  });
  const handleClick = () => {
    history.push('/okrs/create-new-okrs');
  };

  //! Render
  return (
    <div className="container-okr">
      <CommonStyles.Button
        color="primary"
        borderRadius="round"
        innerText={t('common:submit')}
        onClick={handleClick}
      />
    </div>
  );
};

export default OKRs;
