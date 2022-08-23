import httpService from './httpServices';
import { COMPANY_URL } from 'constants/api';

class CompanyService {
  getCompany(param) {
    return httpService.get(COMPANY_URL, param && { params: { ...param } });
  }
}

export default new CompanyService();
