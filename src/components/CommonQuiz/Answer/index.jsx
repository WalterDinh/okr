import React, { useState } from 'react';

const Answer = (props) => {
  const { answer, question } = props;

  //   const [idChecked, setIdChecked] = useState([]);
  //   console.log('isChecked: ', idChecked);
  //   const handleChangeAnswer = (id) => {
  //     if (idChecked.indexOf(id) > -1) {
  //       setIdChecked(idChecked.filter((item) => item !== id));
  //     } else {
  //       if (question.questionType === 1) {
  //         setIdChecked([id]);
  //       }
  //       if (question.questionType === 2) {
  //         setIdChecked([...idChecked, id]);
  //       }
  //     }
  //   };
  return (
    <div className="answer">
      <input
        type="checkbox"
        className="checkbox"
        checked={idChecked.indexOf(answer.id) > -1}
        onChange={() => {
          handleChangeAnswer(answer.id);
        }}
      />
      <div className="answer-content">{answer.content}</div>
    </div>
  );
};

export default Answer;
