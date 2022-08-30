import React, { Fragment } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, LinearProgress } from '@mui/material';
import CommonIcon from 'components/icons';
import CommonStyles from 'components/CommonStyles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const HistoryModal = ({ open, handleClose, detail }) => {
  return (
    <Fragment>
      <Dialog open={open} TransitionComponent={Transition} className="historyDetail" fullScreen onClose={handleClose}>
        <div className="historyTitle">
          <div className="title">Lịch sử check-in</div>
          <CommonStyles.Button innerText={'Đóng'} onClick={handleClose} color="primary" borderRadius={'round'} />
        </div>
        <DialogContent className="historyContent">
          <table style={{ width: '100%' }}>
            <thead>
              <tr className="tableHeader">
                <th className="tbheader">KẾT QUẢ CHÍNH</th>
                <th className="tbheader">MỤC TIÊU</th>
                <th className="tbheader">SỐ ĐẠT ĐƯỢC </th>
                <th className="tbheader">TIẾN ĐỘ</th>
                <th className="tbheader">MỨC ĐỘ TỰ TIN</th>
                <th className="tbheader">TIẾN ĐỘ, KẾT QUẢ CÔNG VIỆC?</th>
                <th className="tbheader">CÔNG VIỆC NÀO ĐANG & SẼ CHẬM TIẾN ĐỘ?</th>
                <th className="tbheader">TRỞ NGẠI, KHÓ KHĂN LÀ GÌ?</th>
                <th className="tbheader">CẦN LÀM GÌ ĐỂ VƯỢT QUA TRỞ NGẠI?</th>
              </tr>
            </thead>
            <tbody>
              {detail.map((result, index) => {
                console.log('detail: ', result);
                return (
                  <tr key={index}>
                    <td className="tableBody">
                      <div className="result">
                        <input type="checkbox" checked={result.is_done} disabled />
                        {result.result_data[0].key_result}
                      </div>
                    </td>
                    <td className="tableBody">
                      <div className="target">{result.result_data[0].target}</div>
                    </td>
                    <td className="tableBody">
                      <div className="achieved">{result.result_data[0].current_done}</div>
                    </td>
                    <td className="tableBody">
                      <div className="processed">{(result.result_data[0].processed * 100).toFixed(2) + '%'}</div>
                    </td>
                    <td className="tableBody">
                      <div>
                        <div className="confident">
                          <input type="checkbox" checked={result.confident === 1} disabled />
                          Rat tot
                        </div>
                        <div className="confident">
                          <input type="checkbox" checked={result.confident === 0} disabled />
                          On
                        </div>
                        <div className="confident">
                          <input type="checkbox" checked={result.confident === -1} disabled />
                          Khong on lam
                        </div>
                      </div>
                    </td>
                    <td className="tableBody">
                      <div className="textArea">
                        <textarea value={result.process_note} disabled />
                      </div>
                    </td>
                    <td className="tableBody">
                      <div className="textArea">
                        <textarea value={result.overdue_note} disabled />
                      </div>
                    </td>
                    <td className="tableBody">
                      <div className="textArea">
                        <textarea value={result.trouble_note} disabled />
                      </div>
                    </td>
                    <td className="tableBody">
                      <div className="textArea">
                        <textarea value={result.solution_note} disabled />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default HistoryModal;
