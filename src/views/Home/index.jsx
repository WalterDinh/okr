import EachTodo from 'components/EachTodo';
import useGetListTodos from 'hooks/todos/useGetListTodos';
import useSagaCreators from 'hooks/useSagaCreators';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { authActions, logout } from 'redux/modules/auth';

const HomePage = (props) => {
  //! State
  const { t } = useTranslation();
  const { dispatch } = useSagaCreators();

  //! Function
  const onLogout = () => {
    dispatch(authActions.logout);
  };

  //! Render
  return (
    <div>
      <h3>{t('message:hello')}</h3>

      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
