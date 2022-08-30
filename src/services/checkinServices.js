import httpService from './httpServices';
import { CHECK_IN_URL, CHECK_IN_DETAIL, CHECK_IN_ROOM } from 'constants/api';

class CheckinService {
  getCheckin(param) {
    return httpService.get(CHECK_IN_URL, param && { params: { ...param } });
  }
  getById(id) {
    return httpService.get(CHECK_IN_URL + id);
  }
  postCheckin(body) {
    return httpService.post(CHECK_IN_DETAIL, body);
  }
  postCheckinMeeting(body) {
    return httpService.post(CHECK_IN_ROOM, body);
  }
}

export default new CheckinService();
