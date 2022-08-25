import { useEffect, useState } from 'react';
import quizServices from 'services/quizServices';

const useGetListQuiz = (filters) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const refetch = async () => {
    try {
      const response = await quizServices.getQuiz();
      setData(response?.data[0] || {});
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await quizServices.getQuiz();
        const { questions, title } = response?.data[0];
        //convert data
        // const listQuestions = [];
        // for (const question of questions) {
        //   listQuestions.push({
        //     answers: question.answers,
        //     content: question.content,
        //     questionType: question.question_type,
        //     id: question.id,
        //   });
        // }
        // const res = { listQuestions, title };
        // console.log('my data:', res);
        setData(response?.data[0] || {});
        // setLoading(false);
      } catch (error) {
        setError(error);
        // setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [data, loading, error, refetch];
};

export default useGetListQuiz;
