import httpServices from './httpServices';
import { AUTH_URL } from 'constants/api';
import { SIGNUP_URL } from 'constants/api';
class AuthServices {
  signup({ email, password, full_name } = {}) {
    return httpServices.post(SIGNUP_URL, { email, password, full_name });
  }

  saveUserDatabase({ email, name, password } = {}) {
    return httpServices.post(AUTH_URL, { email, name, password });
  }

  login({ email, password } = {}) {
    return httpServices.post(AUTH_URL, { email, password });
  }

  saveUserLocalStorage(data = {}) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  getUserLocalStorage() {
    const dataUser = localStorage.getItem('user');
    if (!!dataUser) {
      return JSON.parse(dataUser);
    }
    return {};
  }

  clearUserLocalStorage() {
    localStorage.removeItem('user');
  }
}

export default new AuthServices();
