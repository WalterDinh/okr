import React, { useRef, Fragment } from 'react';
import { Formik, Field, Form, getIn } from 'formik';
import CommonStyles from 'components/CommonStyles';
import { Box, CircularProgress, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import useSagaCreators from 'hooks/useSagaCreators';
import { checkinActions } from 'redux/modules/checkin';
import * as Yup from 'yup';
import moment from 'moment';
import { useState } from 'react';
import { GetUserSelector } from 'redux/selectors';

const CheckinOkr = ({ data }) => {
  //!State
  const formikRef = useRef();
  const { checkin_date, object_name, okr_list, percent_completed, is_done, confident, id: checkin_id } = data;
  const { id: userId } = GetUserSelector();
  const { dispatch } = useSagaCreators();
  const validationSchema = Yup.object().shape({
    confident: Yup.string().required('Đây là trường bắt buộc'),
    checkin_date: Yup.date().min(new Date(), `Chọn ngày sau ngày ${moment(new Date()).format('DD/MM/YYYY')}`),
    okr_list: Yup.array().of(
      Yup.object().shape({
        result: Yup.string().required('Đây là trường bắt buộc'),
        confident: Yup.string().nullable().required('Đây là trường bắt buộc'),
        overdue_note: Yup.string().required('Đây là trường bắt buộc'),
        process_note: Yup.string().required('Đây là trường bắt buộc'),
        solution_note: Yup.string().required('Đây là trường bắt buộc'),
        target: Yup.number().required('Đây là trường bắt buộc'),
        current_done: Yup.number()
          .required('Đây là trường bắt buộc')
          .min(0, 'Phải lớn hơn hoặc bằng 0')
          .when('target', (target, schema) => {
            return schema.max(target, `Phải nhỏ hơn ${target}`);
          }),
        trouble_note: Yup.string().required('Đây là trường bắt buộc'),
        processed: Yup.string().required('Đây là trường bắt buộc'),
      }),
    ),
  });
  const [loading, setLoading] = useState(false);
  //!Function
  const handleClockChange = (value) => {
    formikRef.current && formikRef.current.setFieldValue('checkin_date', value.$d);
  };
  const handleResetForm = () => {
    if (formikRef.current && formikRef.current.dirty) {
      const confirmReset = confirm('có muốn xóa không ? ');
      if (confirmReset) {
        formikRef.current.resetForm({ values: { okr_list } });
      } else {
        alert('khong xoas');
      }
    }
  };
  const handleSubmitForm = () => {
    setLoading(true);
    if (formikRef.current) {
      const values = formikRef.current.values;
      const checkin_result = values.okr_list.map((value) => {
        return {
          confident: value.confident,
          is_done: value.is_done,
          overdue_note: value.overdue_note,
          process_note: value.process_note,
          result: value.result,
          solution_note: value.solution_note,
          trouble_note: value.trouble_note,
          total_done: value.current_done,
        };
      });
      const uploadData = {
        checkin_date: moment(values.checkin_date).toDate(),
        checkin_result,
        is_done: values.is_done,
        confident: values.confident,
        okr: checkin_id,
        user: userId,
        checkin_status: values.checkin_date ? 0 : 1,
      };
      dispatch(checkinActions.postCheckin, {
        data: uploadData,
        callbacks: {
          onSuccess: () => {
            setLoading(false);
          },
          onFailed: () => {
            setLoading(false);
          },
        },
      });
    }
  };
  //! Render
  return (
    <Formik
      innerRef={formikRef}
      validationSchema={validationSchema}
      initialValues={{ okr_list: okr_list, is_done: is_done, confident: confident, checkin_date: new Date() }}
      onSubmit={handleSubmitForm}
    >
      {({ values, setFieldValue, handleSubmit, errors, touched }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <div className="content">
              <div className="content__header">
                <div className="checkinTitle">{object_name}</div>
                <div className="checkinDate">
                  {is_done ? 'Ngày cần check in: Đã hoàn thành' : `Ngày cần check in: ${checkin_date}`}
                </div>
                <div className="processed">
                  Tiến độ thực hiện: <span>{percent_completed}</span>
                </div>
              </div>
              <div className="content__body">
                <table style={{ width: '100%' }}>
                  <thead>
                    <tr>
                      <th className="tbheader">KẾT QUẢ CHÍNH</th>
                      <th className="tbheader">MỤC TIÊU</th>
                      <th className="tbheader">SỐ ĐẠT ĐƯỢC</th>
                      <th className="tbheader">TIẾN ĐỘ</th>
                      <th className="tbheader">MỨC ĐỘ TỰ TIN</th>
                      <th className="tbheader">TIẾN ĐỘ, KẾT QUẢ CÔNG VIỆC?</th>
                      <th className="tbheader">{'Công việc nào đang & sẽ chậm tiến độ?'}</th>
                      <th className="tbheader">Trở ngại, khó khănlà gì? </th>
                      <th className="tbheader">Cần làm gì để vượt qua trở ngại?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {okr_list?.map((elm, index) => {
                      return (
                        <tr key={index}>
                          <td className="tbbody">
                            <div className="checkin">
                              <Field
                                name={`okr_list[${index}].is_done`}
                                component="input"
                                type="checkbox"
                                disabled={elm.is_done}
                                style={{ height: '20px', width: '20px' }}
                              />
                              {elm.key_result}
                            </div>
                          </td>
                          <td className="tbbody">
                            <div className="target">
                              <Field
                                name={`okr_list[${index}].target`}
                                component={CommonStyles.Input}
                                style={{ width: '100%', height: '100%' }}
                                value={values.okr_list[index].target}
                                disabled
                              />
                            </div>
                          </td>
                          <td className="tbbody">
                            <div className="achieved">
                              <Field
                                name={`okr_list[${index}].current_done`}
                                component={CommonStyles.Input}
                                style={{ width: '100%', height: '100%' }}
                                value={values.okr_list[index].current_done}
                                onChange={(e) => {
                                  setFieldValue(`okr_list[${index}].current_done`, +e.target.value);
                                }}
                                disabled={elm.is_done}
                                errorMsg={getIn(errors, `okr_list[${index}].current_done`)}
                                isTouched={getIn(touched, `okr_list[${index}].current_done`)}
                              />
                            </div>
                          </td>
                          <td className="tbbody">
                            <div className="progress">
                              {((values.okr_list[index].current_done / values.okr_list[index].target) * 100).toFixed(
                                2,
                              ) + ' %' || '0.00%'}
                            </div>
                          </td>
                          <td className="tbbody">
                            <div className="checkboxRound ">
                              <Field
                                name={`okr_list[${index}].confident`}
                                component="input"
                                onChange={() => {
                                  setFieldValue(`okr_list[${index}].confident`, 1);
                                }}
                                checked={values.okr_list[index].confident && values.okr_list[index].confident === 1}
                                disabled={elm.is_done}
                                value={1}
                                type="checkbox"
                              />
                              Rat tot
                            </div>
                            <div className="checkboxRound ">
                              <Field
                                name={`okr_list[${index}].confident`}
                                component="input"
                                onChange={() => {
                                  setFieldValue(`okr_list[${index}].confident`, 0);
                                }}
                                value={0}
                                disabled={elm.is_done}
                                checked={values.okr_list[index].confident && values.okr_list[index].confident === 0}
                                type="checkbox"
                              />
                              On
                            </div>
                            <div className="checkboxRound ">
                              <Field
                                name={`okr_list[${index}].confident`}
                                component="input"
                                onChange={() => {
                                  setFieldValue(`okr_list[${index}].confident`, -1);
                                }}
                                checked={values.okr_list[index].confident && values.okr_list[index].confident === -1}
                                value={-1}
                                disabled={elm.is_done}
                                type="checkbox"
                              />
                              Khong on lam
                            </div>
                            <div className="error">{getIn(errors, `okr_list[${index}].confident`)}</div>
                          </td>
                          <td className="tbbody">
                            <div className="textArea">
                              <Field
                                component="textarea"
                                name={`okr_list[${index}].process_note`}
                                value={values.okr_list[index].process_note}
                                disabled={elm.is_done}
                              />
                              <div className="error">
                                {getIn(touched, `okr_list[${index}].process_note`)
                                  ? getIn(errors, `okr_list[${index}].process_note`)
                                  : ''}
                              </div>
                            </div>
                          </td>
                          <td className="tbbody">
                            <div className="textArea">
                              <Field
                                component="textarea"
                                name={`okr_list[${index}].overdue_note`}
                                value={values.okr_list[index].overdue_note}
                                disabled={elm.is_done}
                              />
                              <div className="error">
                                {' '}
                                {getIn(touched, `okr_list[${index}].overdue_note`)
                                  ? getIn(errors, `okr_list[${index}].overdue_note`)
                                  : ''}
                              </div>
                            </div>
                          </td>
                          <td className="tbbody">
                            <div className="textArea">
                              <Field
                                component="textarea"
                                name={`okr_list[${index}].trouble_note`}
                                value={values.okr_list[index].trouble_note}
                                disabled={elm.is_done}
                              />
                              <div className="error">
                                {getIn(touched, `okr_list[${index}].trouble_note`)
                                  ? getIn(errors, `okr_list[${index}].trouble_note`)
                                  : ''}
                              </div>
                            </div>
                          </td>
                          <td className="tbbody">
                            <div className="textArea">
                              <Field
                                component="textarea"
                                name={`okr_list[${index}].solution_note`}
                                value={values.okr_list[index].solution_note}
                                disabled={elm.is_done}
                              />
                              <div className="error">
                                {getIn(touched, `okr_list[${index}].solution_note`)
                                  ? getIn(errors, `okr_list[${index}].solution_note`)
                                  : ''}
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="confidence_checkin">
                <div>Chọn mức độ tự tin hoàn thành của mục tiêu:</div>
                <div className="checkboxRound">
                  <Field
                    component="input"
                    type="checkbox"
                    name="confident"
                    checked={values.confident === 1}
                    disabled={is_done}
                    onChange={() => {
                      setFieldValue('confident', 1);
                    }}
                  />
                  Rất tốt
                </div>
                <div className="checkboxRound">
                  <Field
                    component="input"
                    type="checkbox"
                    name="confident"
                    checked={values.confident === 0}
                    disabled={is_done}
                    onChange={() => {
                      setFieldValue('confident', 0);
                    }}
                  />
                  Ổn
                </div>
                <div className="checkboxRound">
                  <Field
                    component="input"
                    type="checkbox"
                    name="confident"
                    checked={values.confident === -1}
                    disabled={is_done}
                    onChange={() => {
                      setFieldValue('confident', -1);
                    }}
                  />
                  Không ổn lắm
                </div>
              </div>
              <div className="content__footer">
                <div className="right">
                  <div className="complete">
                    <Field
                      component="input"
                      type="checkbox"
                      checked={values.is_done}
                      name="is_done"
                      disabled={is_done}
                    />
                    Hoàn thành OKRs
                  </div>
                  <div className="checkinDate">
                    <span>Ngày Check-in tiếp theo</span>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        name="checkin_date"
                        value={values.checkin_date}
                        onChange={handleClockChange}
                        disabled={is_done}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    <div className="error">
                      {errors.checkin_date && touched.checkin_date ? errors.checkin_date : ''}
                    </div>
                  </div>
                </div>
                <div className="left">
                  {is_done ? (
                    ''
                  ) : (
                    <Fragment>
                      <CommonStyles.Button
                        color="secondary"
                        borderRadius="round"
                        onClick={handleResetForm}
                        innerText="Reset form"
                      />
                      <div>
                        {loading ? (
                          <Box sx={{ width: '100%' }}>
                            <CircularProgress />
                          </Box>
                        ) : (
                          <CommonStyles.Button
                            color="primary"
                            borderRadius="round"
                            innerText="Check-in xong"
                            type="submit"
                          />
                        )}
                      </div>
                    </Fragment>
                  )}
                </div>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CheckinOkr;
