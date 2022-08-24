import { useSelector } from 'react-redux';

export const GetUserSelector = () => {
  const user = useSelector((state) => state.userReducer.user);
  if (user) {
    return user;
  }
};
