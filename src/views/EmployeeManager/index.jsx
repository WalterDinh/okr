import React from 'react';
import { useTranslation } from 'react-i18next';
import CommonStyles from 'components/CommonStyles';
import EmployeeTitle from '../../components/EmployeeTitle';
import EmployeeTable from './components/EmployeeTable';
import EmployeeForm from './components/EmployeeForm';

const EmployeeManager = () => {
  //! State
  const { t } = useTranslation();
  const [openPopup, setOpenPopup] = React.useState(false);
  const [confirmDialog, setConfirmDialof] = React.useState({
    isOpen: false,
    title: '',
    subtitle: '',
  });

  //! Function
  const handleClickOpen = () => {
    setOpenPopup(true);
  };

  const handleClose = () => {
    setOpenPopup(false);
  };

  //! Render
  return (
    <div className="employeeManager-container">
      <EmployeeTitle
        title={t('setting:employee-manager')}
        placeholder={t('setting:search')}
        innerText={t('setting:add-new')}
        handleClickOpen={handleClickOpen}
      />

      <div className="employeeManager-table">
        <EmployeeTable confirmDialog={confirmDialog} setConfirmDialof={setConfirmDialof} />
      </div>

      <div className="employeeManager-pagination">
        <CommonStyles.PaginationCommon count={99} defaultPage={1} siblingCount={0} shape="rounded" />
      </div>

      <CommonStyles.PopupForm openPopup={openPopup} handleClickOpen={handleClickOpen} handleClose={handleClose}>
        <EmployeeForm />
      </CommonStyles.PopupForm>

      <CommonStyles.ConfirmDialog confirmDialog={confirmDialog} setConfirmDialof={setConfirmDialof} />
    </div>
  );
};

export default EmployeeManager;
