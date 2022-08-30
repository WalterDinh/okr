import React, { useRef, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import CommonStyles from 'components/CommonStyles';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { checkinActions } from 'redux/modules/checkin';
import useSagaCreators from 'hooks/useSagaCreators';
const style = {
  meetingInput: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    marginBottom: '12px',
  },
};

const CheckinMeeting = ({ open, handleClose, id = 0 }) => {
  //! State
  const { t } = useTranslation();
  const { dispatch } = useSagaCreators();
  const formikRef = useRef();
  const initialValue = {
    meeting_name: '',
    startDate: new Date(),
  };
  const validationSchema = Yup.object().shape({
    meeting_name: Yup.string().required(t('messages:required_field', { key: t('common:meeting-name') })),
    startDate: Yup.date()
      .required(t('messages:required_field', { key: t('common:startDate') }))
      .min(new Date(), `Không thể chọn sau ${moment(new Date()).format('YYYY-MM-DD_HH:mm:ss')}`),
  });
  const [loading, setLoading] = useState(false);
  //!Function
  const handleSubmit = (values) => {
    setLoading(true);
    const room_id = `checkin${id}_${moment().unix()}`;
    const room_url = `/call-checkin-okr/${room_id}`;
    const start_time = moment(values.startDate).format('YYYY-MM-DDTHH:mm:ss');
    const uploadData = {
      room_id,
      room_url,
      room_name: values.meeting_name,
      password: '',
      okr_id: id,
      checkin: '',
      user_related: [],
      start_time,
    };
    dispatch(checkinActions.postMeeting, {
      data: uploadData,
      callbacks: {
        onSuccess: () => {
          setLoading(false);
        },
        onFailed: (errors) => {
          setLoading(false);
        },
      },
    });
    !loading && handleClose();
  };

  const handleCancel = () => {
    if (formikRef.current && formikRef.current.dirty) {
      const confirm = window.confirm(t('messages:confirm-reset'));
      if (confirm) {
        formikRef.current.resetForm({ values: { ...initialValue } });
      }
    }
    handleClose();
  };
  const handleClockChange = (value) => {
    formikRef.current && formikRef.current.setFieldValue('startDate', value.$d);
  };

  //!Render
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle style={{ borderBottom: 'solid 1px #000' }}>Tạo Phòng Họp</DialogTitle>
      <Formik
        innerRef={formikRef}
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(props) => {
          return (
            <Form style={{ padding: '16px' }}>
              <div style={style.meetingInput}>
                <div className="inputForm">
                  <Field
                    name="meeting_name"
                    component={CommonStyles.Input}
                    label={t('common:meeting-name')}
                    placeholder={t('messages:input-placeholder', { key: t('common:meeting') })}
                    style={{ height: '40px' }}
                  />
                </div>
                <div className="inputForm">
                  <div style={{ marginBottom: '8px' }}>Start date:</div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      name="startDate"
                      value={props.values.startDate}
                      onChange={handleClockChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <div className="error">
                    {props.errors.startDate && props.touched.startDate ? props.errors.startDate : ''}
                  </div>
                </div>
              </div>
              <DialogActions>
                <CommonStyles.Button
                  type="reset"
                  color="primary"
                  innerText="Cancel"
                  onClick={handleCancel}
                  borderRadius="round"
                />
                <CommonStyles.Button
                  type="submit"
                  color="primary"
                  innerText="Submit"
                  borderRadius="round"
                  onClick={props.handleSubmit}
                />
              </DialogActions>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default CheckinMeeting;
