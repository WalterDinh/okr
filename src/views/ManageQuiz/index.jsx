import React, { useState } from 'react';
import CommonStyles from '../../components/CommonStyles';
import CommonIcons from '../../components/icons';
import { useTranslation } from 'react-i18next';
import useGetListQuiz from '../../hooks/quiz/useGetListQuiz';
import CommonQuiz from '../../components/CommonQuiz';
import ModalQuiz from 'components/CommonQuiz/ModalQuiz';

const ManageQuiz = () => {
  const { t } = useTranslation();

  const [data, loading, , refetch] = useGetListQuiz();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="manage-quiz-page">
      <div className="filter">
        <div className="title">{t('quiz:set-of-questions')}</div>
        <div className="filter-right">
          <CommonStyles.Input
            icon={<CommonIcons.Search />}
            placeholder={t('common:search')}
            style={{ width: 300, height: 40, borderRadius: 0, border: 'none' }}
          />
          <CommonStyles.Button
            color="primary"
            innerText={t('messages:add')}
            onClick={handleOpenModal}
            icon={<CommonIcons.Add />}
            borderRadius="round"
            style={{
              padding: '8px 16px',
              minHeight: 'unset',
            }}
          />
        </div>
      </div>
      <ModalQuiz
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        handleSubmitModal={handleCloseModal}
        typeModal="add"
      />
      {loading ? (
        'Loading...'
      ) : (
        <div className="content">
          {data.questions.map((question, index) => (
            <CommonQuiz.Question
              key={question.id}
              question={question}
              index={index + 1}
              typePage="manage"
              //   handleSetListResult={handleSetListResult}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageQuiz;
