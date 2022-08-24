import httpService from './httpServices';
import { GET_QUIZ_URL } from 'constants/api';

class QuizService {
  getQuiz() {
    return httpService.get(GET_QUIZ_URL);
  }
}

export default new QuizService();
