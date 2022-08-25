import CommonQuiz from 'components/CommonQuiz';
import useGetListQuiz from 'hooks/quiz/useGetListQuiz';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Quiz = () => {
  const { t } = useTranslation();
  const [data, loading, , refetch] = useGetListQuiz(0);

  const [listResult, setListResult] = useState([]);

  const handleSetListResult = (value) => {
    if (listResult.findIndex((item) => item.questionId === value.questionId) > -1) {
      const newListResult = listResult.map((item) => {
        if (item.questionId === value.questionId) {
          return value;
        } else return item;
      });
      setListResult(newListResult);
    } else {
      setListResult([...listResult, value]);
    }
  };

  return (
    <div className="quiz-page">
      <div className="top-page">
        <div className="title">{data.title}</div>
        <div className="btn">{t('quiz:see-answer')}</div>
      </div>
      {loading ? (
        'Loading...'
      ) : (
        <div className="content">
          {data.questions.map((question, index) => (
            <CommonQuiz.Question
              key={question.id}
              question={question}
              index={index + 1}
              handleSetListResult={handleSetListResult}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
