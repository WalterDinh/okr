import httpService from './httpServices';
import { GET_TODOS_URL } from 'constants/api';

class TodosService {
  getTodos(param) {
    return httpService.get(GET_TODOS_URL, param && { params: { ...param } });
  }
}

export default new TodosService();
