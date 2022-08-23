import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CommonStyles from '..';
import WarningIcon from '@mui/icons-material/Warning';
import { Typography } from '@mui/material';

function ConfirmDialog(props) {
  const { confirmDialog, setConfirmDialof } = props;

  console.log('confirmDialog', confirmDialog);

  const handleClose = () => {
    setConfirmDialof({ ...confirmDialog, isOpen: false });
  };

  return (
    <div>
      <Dialog open={confirmDialog.isOpen} onClose={handleClose} maxWidth="xs" fullWidth sx={{ textAlign: 'center' }}>
        <DialogTitle>
          <WarningIcon sx={{ fontSize: '8rem' }} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="h6">{confirmDialog.title}</Typography>
          </DialogContentText>
          <DialogContentText>
            <DialogContentText>
              <Typography variant="subtitle1">{confirmDialog.subtitle}</Typography>
            </DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <CommonStyles.Button color="primary" borderRadius="round" innerText="No" onClick={handleClose} />
          <CommonStyles.Button
            color="primary"
            borderRadius="round"
            innerText="Yes"
            // onClick={}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default React.memo(ConfirmDialog);
