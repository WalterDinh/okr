import httpService from './httpServices';
import { USER_URL, UPLOAD_URL } from 'constants/api';

class UserProfileService {
  patchUser({ id, data } = {}) {
    return httpService.patch(USER_URL + id, data);
  }

  getUser({ id } = {}) {
    return httpService.get(USER_URL + id);
  }

  updateUserAvatar({ formData } = {}) {
    return httpService.post(UPLOAD_URL, formData);
  }

  saveUserLocalStorage(data = {}) {
    localStorage.setItem('user', JSON.stringify(data));
  }
}

export default new UserProfileService();
