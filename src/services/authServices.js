import httpServices from './httpServices';
import { USER_URL } from 'constants/api';
class AuthServices {
  signup({ email } = {}) {
    return httpServices.get(`${USER_URL}?email=${email}`);
  }

  saveUserDatabase({ email, name, password } = {}) {
    return httpServices.post(USER_URL, { email, name, password });
  }

  login({ email, password } = {}) {
    return httpServices.get(`${USER_URL}?email=${email}&password=${password}`);
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
