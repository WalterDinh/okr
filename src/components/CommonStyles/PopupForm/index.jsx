import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CommonStyles from '..';
import WarningIcon from '@mui/icons-material/Warning';
import { Typography } from '@mui/material';
import Close from '@mui/icons-material/Close';

const PopupForm = (props) => {
  const { children, openPopup, handleClose } = props;

  //! Function

  return (
    <div>
      <Dialog open={openPopup} onClose={handleClose} maxWidth="sm" fullWidth sx={{ textAlign: 'center' }}>
        <DialogTitle>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
              Employee Form
            </Typography>
            <CommonStyles.Button color="icon" borderRadius="round" icon={<Close />} onClick={handleClose} />
          </div>
        </DialogTitle>
        <hr />
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default PopupForm;
