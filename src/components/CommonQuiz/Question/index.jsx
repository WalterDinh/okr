import { BASE_URL } from 'constants/api';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Question = (props) => {
  const { question, index, handleSetListResult } = props;
  const { t } = useTranslation();

  const [idChecked, setIdChecked] = useState([]);
  const handleChangeAnswer = (id) => {
    if (idChecked.indexOf(id) > -1) {
      setIdChecked(idChecked.filter((item) => item !== id));
    } else {
      if (question.question_type === 1) {
        setIdChecked([id]);
      }
      // if (question.question_type === 2) {
      //   setIdChecked([...idChecked, id]);
      // }
      else {
        setIdChecked([...idChecked, id]);
      }
    }
  };

  useEffect(() => {
    if (idChecked.length > 0) {
      handleSetListResult({ questionId: question.id, idChecked });
    }
  }, [idChecked]);
  return (
    <div className="question-wrapper">
      <div className="top">
        <div className="number-question">
          {t('quiz:question')} {index}
        </div>
        <button className="type-question">
          {question.question_type === 1 ? t('quiz:single-choice') : t('quiz:multiple-choice')}
        </button>
      </div>
      <div className="question">{question.content}</div>
      {question.attachment_question.length > 0 && (
        <img src={`${BASE_URL}${question.attachment_question.file_url}`} alt="anh" className="question-img" />
      )}
      <div className="answers-list">
        {question.answers.map((answer) => {
          const isChecked = idChecked.indexOf(answer.id) > -1;
          return (
            <div className="answer" key={answer.id}>
              <input
                type="checkbox"
                className="checkbox"
                checked={isChecked}
                onChange={() => {
                  handleChangeAnswer(answer.id);
                }}
              />
              <div className="answer-content">{answer.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;