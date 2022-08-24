import CommonQuiz from 'components/CommonQuiz';
import React, { useState } from 'react';

const listQuestion = [
  {
    id: 1,
    attachmentQuestion: [],
    answers: [
      { id: 1, content: 'dap an dap an dap an dap an dap an dap an dap an dap an dap an dap an dap an' },
      { id: 2, content: 'dap an' },
      { id: 3, content: 'dap an' },
      { id: 4, content: 'dap an' },
    ],
    content: 'cau hoi',
    questionType: 1,
  },
  {
    id: 2,
    attachmentQuestion: [{}],
    answers: [
      { id: 5, content: 'dap an' },
      { id: 6, content: 'dap an' },
      { id: 7, content: 'dap an' },
      { id: 8, content: 'dap an' },
    ],
    content: 'cau hoi',
    questionType: 2,
  },
  {
    id: 3,
    attachmentQuestion: [],
    answers: [
      { id: 9, content: 'dap an' },
      { id: 10, content: 'dap an' },
      { id: 11, content: 'dap an' },
      { id: 12, content: 'dap an' },
    ],
    content: 'cau hoi',
    questionType: 1,
  },
  {
    id: 4,
    attachmentQuestion: [],
    answers: [
      { id: 13, content: 'dap an' },
      { id: 14, content: 'dap an' },
      { id: 15, content: 'dap an' },
      { id: 16, content: 'dap an' },
    ],
    content: 'cau hoi',
    questionType: 2,
  },
];
const Quiz = () => {
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
        <div className="title">Title quiz</div>
        <div className="btn">Xem dap an</div>
      </div>
      <div className="content">
        {listQuestion.map((question, index) => (
          <CommonQuiz.Question
            key={question.id}
            question={question}
            index={index + 1}
            handleSetListResult={handleSetListResult}
          />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
