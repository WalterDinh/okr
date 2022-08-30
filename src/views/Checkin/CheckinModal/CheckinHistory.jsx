import CommonStyles from 'components/CommonStyles';
import moment from 'moment';
import React, { useState, Fragment } from 'react';
import HistoryModal from './HistoryModal';

const FORMAT_DATE = 'DD/MM/YYYY';
const style = {
  btn: {
    minHeight: 'unset',
    height: '28px',
    backgroundColor: '#fff',
    width: '84px',
  },
};
const CheckinHistory = ({ data }) => {
  //! State
  const { checkin_date, object_name, percent_completed, is_done, history } = data;
  const [detail, setDetail] = useState();
  const [detailOpen, setDetailOpen] = useState(false);

  //!Function
  const handleOpenForDetail = (value) => {
    setDetail(value);
    setDetailOpen(true);
  };
  const handleCloseDetail = () => {
    setDetailOpen(false);
  };
  //!Render
  return (
    <Fragment>
      {detailOpen && <HistoryModal open={detailOpen} handleClose={handleCloseDetail} detail={detail} />}
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
        <div className="content__history">
          <table className="table">
            <thead>
              <tr>
                <th className="tbheader">Ngày check-in</th>
                <th className="tbheader">Ngày check-in kế tiếp</th>
                <th className="tbheader"> đã duyệt </th>
                <th className="tbheader"> trạng thái</th>
                <th className="tbheader">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {history.map((el, index) => {
                return (
                  <tr key={index}>
                    <td className="tbcontent">
                      <div>{moment(el.created_time).format(FORMAT_DATE)}</div>
                    </td>
                    <td className="tbcontent">
                      <div>
                        {el.checkin_date
                          ? `Check-in: ${moment(el.checkin_date).format(FORMAT_DATE)}`
                          : 'Check-in: Chưa có ngày check-in'}
                      </div>
                    </td>
                    <td className="tbcontent">
                      <div>
                        <CommonStyles.Button
                          disabled
                          innerText={'Đã duyệt'}
                          color="secondary"
                          borderRadius="round"
                          style={style.btn}
                        />
                      </div>
                    </td>
                    <td className="tbcontent">
                      <div>{el.is_done ? 'Đã hoàn thành' : 'Chưa hoàn thành'}</div>
                    </td>
                    <td className="tbcontent">
                      <div>
                        <CommonStyles.Button
                          innerText={'Xem chi tiết'}
                          color="secodary"
                          borderRadius="round"
                          onClick={() => handleOpenForDetail(el.checkin_result)}
                          style={style.btn}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default CheckinHistory;
