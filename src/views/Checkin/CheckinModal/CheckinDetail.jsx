import React, { Fragment, useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import CommonStyles from 'components/CommonStyles';
import CommonIcon from 'components/icons';
import { useTranslation } from 'react-i18next';
import useGetcheckinDetail from 'hooks/checkin/useGetCheckinDetail';
import { Box, LinearProgress } from '@mui/material';
import { useState } from 'react';
import CheckinHistory from './CheckinHistory';
import CheckinOkr from './CheckinOkr';

const style = {
  btnClose: {
    border: 0,
  },
  btnOkr: {
    width: '140px',
  },
  history: {
    width: '140px',
  },
};

const CheckinDetail = ({ open, handleClose, id }) => {
  //! State
  const { t } = useTranslation();
  const [data, loading] = useGetcheckinDetail(id);
  const [currentTab, setCurrentTab] = useState('checkinOkrs');
  //!Function

  const close = () => {
    setCurrentTab('checkinOkrs');
    handleClose();
  };
  //!Render
  return (
    <Dialog className="checkinModal" open={open} onClose={close} fullScreen>
      <div className="header">
        <div className="header__left">
          <div className="title">Check-in OKRs hàng tuần</div>
          <div className="groupBtn">
            <CommonStyles.Button
              style={style.btnOkr}
              innerText="Check-in OKRs"
              onClick={() => setCurrentTab('checkinOkrs')}
              color="primary"
            />
            <CommonStyles.Button
              style={style.history}
              innerText="Lịch sử Check-in"
              onClick={() => setCurrentTab('history')}
              color="secondary"
            />
          </div>
        </div>
        <div className="header__right">
          <CommonIcon.Close onClick={handleClose} />
        </div>
      </div>
      {loading ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      ) : (
        <Fragment>
          {currentTab === 'checkinOkrs' ? <CheckinOkr data={data} /> : <CheckinHistory data={data} />}
        </Fragment>
      )}
    </Dialog>
  );
};

export default CheckinDetail;
