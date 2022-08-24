import httpService from './httpServices';
import { DEPARTMENT_URL } from 'constants/api';

class DepartmentService {
  getDepartment(param) {
    return httpService.get(DEPARTMENT_URL, param && { params: { ...param } });
  }
}

export default new DepartmentService();
