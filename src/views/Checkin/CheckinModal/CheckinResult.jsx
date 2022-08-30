import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useTranslation } from 'react-i18next';
import useGetCheckinById from 'hooks/checkin/useGetCheckinById';
import CommonIcon from 'components/icons';
import { Box, LinearProgress } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CheckinResult = ({ open, handleClose, id, title }) => {
  //!State
  const { t } = useTranslation();
  const [data, loading] = useGetCheckinById(id);

  //!Function

  //!Render
  return (
    <Dialog open={open} TransitionComponent={Transition} className="CheckinResult" fullScreen onClose={handleClose}>
      <DialogTitle className="checkinTitle">{title}</DialogTitle>
      <DialogContent className="checkinContent">
        <table style={{ width: '100%' }}>
          <thead>
            <tr className="tableHeader">
              <th className="tableHeader__content">{t('common:main-result')}</th>
              <th className="tableHeader__content">{t('common:target')}</th>
              <th className="tableHeader__content">{t('common:unit')}</th>
              <th className="tableHeader__content">{t('common:achieve')}</th>
              <th className="tableHeader__content">{t('common:progress')}</th>
              <th className="tableHeader__content">{t('common:change')}</th>
              <th className="tableHeader__content">{t('common:confidence')}</th>
              <th className="tableHeader__content">{t('common:plan')}</th>
              <th className="tableHeader__content">{t('common:result')}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((result, index) => {
              return (
                <tr className="tableBody" key={index}>
                  <td className="tableBody__content">{result.mainResult}</td>
                  <td className="tableBody__content">{result.target}</td>
                  <td className="tableBody__content">{result.unit}</td>
                  <td className="tableBody__content">{result.achieved}</td>
                  <td className="tableBody__content">
                    <div className="progress">{(result.processed * 100).toFixed(2) + '%'}</div>
                  </td>
                  <td className="tableBody__content">{result.change.toFixed(2) + '%'}</td>
                  <td className="tableBody__content">{result.confidence}</td>
                  <td className="tableBody__content">
                    {/* <CommonStyles.Button icon={CommonIcon.Link} onClick={handleToPlan(result.plac)} /> */}
                    <a className="link" href="https://www.google.com/">
                      <CommonIcon.Link style={{ width: '16px', fontWeight: 'bold' }} />
                    </a>
                  </td>
                  <td className="tableBody__content">
                    <a className="link" href="https://www.google.com/">
                      <CommonIcon.Link style={{ width: '16px', fontWeight: 'bold' }} />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </DialogContent>
    </Dialog>
  );
};

export default CheckinResult;
