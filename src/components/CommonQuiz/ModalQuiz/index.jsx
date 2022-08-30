import { Box, Modal } from '@mui/material';
import CommonStyles from 'components/CommonStyles';
import CommonIcons from 'components/icons';
import { Field, FieldArray, Form, Formik, getIn } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GetUserSelector } from 'redux/selectors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const listOption = [
  { value: 1, label: 'Single Choice' },
  { value: 2, label: 'Multiple Choice' },
];
const ModalQuiz = (props) => {
  const { openModal, handleCloseModal, handleSubmitModal, question = {}, index = '', typeModal } = props;

  const { t } = useTranslation();

  const { id } = GetUserSelector();

  const listAnswer = question?.answers?.map((item) => ({ isCorrect: false, answer: item.content }));

  const initialValuesForm =
    typeModal === 'add'
      ? {
          questionType: '',
          questionContent: '',
          answers: [
            {
              isCorrect: false,
              answer: '',
            },
          ],
        }
      : {
          questionType: '',
          questionContent: question.content,
          answers: listAnswer,
        };

  const answersSchema = Yup.object().shape({
    questionType: Yup.string().required('Required'),
    questionContent: Yup.string().required('Required'),
    answers: Yup.array()
      .of(
        Yup.object().shape({
          answer: Yup.string().required('Required'), // these constraints take precedence
        }),
      )
      .test({
        message: 'at least 1 correct answer',
        test: (arr) => {
          let count = 0;
          for (const ans of arr) {
            ans.isCorrect && count++;
          }
          return count > 0;
        },
      }),
  });
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Formik
          initialValues={initialValuesForm}
          validationSchema={answersSchema}
          onSubmit={(values) => console.log('values: ', values)}
        >
          {({ values, errors, touched }) => {
            return (
              <div className="modal-quiz">
                <Form>
                  <div className="title-modal">
                    <div className="number-question">
                      {t('quiz:question')} {index}
                    </div>
                    <Field
                      name="questionType"
                      component={CommonStyles.SelectInputForm}
                      listOption={listOption}
                      placeholder={t('quiz:choice-type-question')}
                      style={{ height: '32px', width: '137px' }}
                    />
                  </div>
                  <div className="modal-content">
                    <Field
                      component="textarea"
                      placeholder={t('quiz:enter-question')}
                      className="fieldArea"
                      name="questionContent"
                    />
                    {errors.questionContent && touched.questionContent ? (
                      <div style={{ color: 'red' }}>{errors.questionContent}</div>
                    ) : null}
                    <FieldArray name="answers">
                      {({ insert, remove, push }) => {
                        return (
                          <div>
                            {values.answers.length > 0 &&
                              values?.answers?.map((item, index) => {
                                return (
                                  <div className="answer" key={index}>
                                    <Field type="checkbox" name={`answers[${index}].isCorrect`} className="checkbox" />
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                      <Field
                                        component={CommonStyles.Input}
                                        placeholder={t('quiz:enter-answer')}
                                        name={`answers[${index}].answer`}
                                        style={{ width: 466 }}
                                        errorMsg={getIn(errors, `answers[${index}].answer`)}
                                        isTouched={getIn(touched, `answers[${index}].answer`)}
                                      />
                                    </div>
                                    <CommonIcons.Image style={{ fontSize: 22, color: 'gray' }} />
                                  </div>
                                );
                              })}
                            <div className="add-answer" onClick={() => push({ isCorrect: false, answer: '' })}>
                              <CommonIcons.Add />
                              <span>{t('quiz:more-answers')}</span>
                            </div>
                          </div>
                        );
                      }}
                    </FieldArray>
                    {typeof errors.answers === 'string' ? <div style={{ color: 'red' }}>{errors.answers}</div> : null}
                  </div>
                  <div className="modal-bot">
                    <CommonStyles.Button
                      type="button"
                      innerText={t('common:cancel')}
                      style={{ borderRadius: '4px', backgroundColor: 'white' }}
                      onClick={handleCloseModal}
                    />
                    <CommonStyles.Button
                      innerText={t('common:submit')}
                      style={{ borderRadius: '4px', backgroundColor: '#18202E', color: 'white' }}
                    />
                  </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      </Box>
    </Modal>
  );
};

export default ModalQuiz;
