import CommonStyles from 'components/CommonStyles';
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
  const [data, loading, , refetch] = useGetListTodos(0);

  //! Function
  const onLogout = () => {
    dispatch(authActions.logout);
  };

  //! Render
  return (
    <div>
      <h3>{t('message:hello')}</h3>
      <button onClick={onLogout}>Logout</button>
      {loading ? (
        'Loading ...'
      ) : (
        <div className="container mx-auto p-3">
          <h3>List Todo</h3>
          <hr />
          {data.map((el) => (
            <EachTodo key={el.id} item={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
