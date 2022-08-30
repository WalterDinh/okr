import { BASE_URL } from 'constants/api';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CommonIcons from '../../icons';
import ModalQuiz from '../ModalQuiz';

const Question = (props) => {
  const { question, index, handleSetListResult = () => {}, typePage } = props;
  const { t } = useTranslation();

  const [idChecked, setIdChecked] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleSubmitModal = () => {};

  const handleChangeAnswer = (id) => {
    if (idChecked.indexOf(id) > -1) {
      setIdChecked(idChecked.filter((item) => item !== id));
    } else {
      if (question.question_type !== 10000) {
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
      {typePage !== 'manage' ? (
        <div className="top">
          <div className="number-question">
            {t('quiz:question')} {index}
          </div>
          <button className="type-question">
            {question.question_type !== 1000 ? t('quiz:single-choice') : t('quiz:multiple-choice')}
          </button>
        </div>
      ) : (
        <>
          <div className="top-manage">
            <div className="left">
              <div className="border-icon-left">
                <CommonIcons.Menu />
              </div>
              <div className="number-question">
                {t('quiz:question')} {index}
              </div>
            </div>
            <div className="right">
              <div className="border-icon">
                <CommonIcons.Edit className="icon-right" onClick={handleOpenModal} />
              </div>
              <div className="border-icon">
                <CommonIcons.Delete className="icon-right" />
              </div>
            </div>
          </div>
          <hr />
        </>
      )}

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
      <ModalQuiz
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        handleSubmitModal={handleCloseModal}
        question={question}
        index={index}
      />
    </div>
  );
};

export default Question;
