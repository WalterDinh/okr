import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CommonStyles from 'components/CommonStyles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';

const dataUser = [
  {
    id: 1,
    name: 'Nguyễn Thành Luân',
    email: 'thanhluan@gmail.com',
    phone: '0912345678',
    department: 'Sale',
    jobPosition: 'Nhân viên',
    time: '28/03/2021',
    permission: 'Nhân viên',
    buttonCheck: <CommonStyles.Button type="icon" borderRadius="round" icon={<CheckCircleOutlineIcon />} />,
    buttonEdit: <CommonStyles.Button type="icon" borderRadius="round" icon={<EditIcon />} />,
    buttonDelete: <CommonStyles.Button type="icon" borderRadius="round" icon={<DeleteIcon />} />,
  },
  {
    id: 2,
    name: 'Đoàn Tuấn Anh',
    email: 'doantuananh@gmail.com',
    phone: '0912345678',
    department: 'Marketing',
    jobPosition: 'Nhân viên',
    time: '28/08/2021',
    permission: 'Nhân viên',
    buttonCheck: <CommonStyles.Button type="icon" borderRadius="round" icon={<CheckCircleOutlineIcon />} />,
    buttonEdit: <CommonStyles.Button type="icon" borderRadius="round" icon={<EditIcon />} />,
    buttonDelete: <CommonStyles.Button type="icon" borderRadius="round" icon={<DeleteIcon />} />,
  },
  {
    id: 3,
    name: 'Phạm Ngoc Anh',
    email: 'phamnganh@gmail.com',
    phone: '0912345678',
    department: 'Dev',
    jobPosition: 'Nhân viên',
    time: '28/08/2021',
    permission: 'Nhân viên',
    buttonCheck: <CommonStyles.Button type="icon" borderRadius="round" icon={<CheckCircleOutlineIcon />} />,
    buttonEdit: <CommonStyles.Button type="icon" borderRadius="round" icon={<EditIcon />} />,
    buttonDelete: <CommonStyles.Button type="icon" borderRadius="round" icon={<DeleteIcon />} />,
  },
];

const EmployeeTable = (props) => {
  //! State
  const { t } = useTranslation();
  const { confirmDialog, setConfirmDialof } = props;

  //! Function

  //! Render
  return (
    <div className="employeeManager-table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">{t('setting:first-last-name')}</TableCell>
              <TableCell align="left">{t('setting:email-login')}</TableCell>
              <TableCell align="left">{t('setting:phone')}</TableCell>
              <TableCell align="left">{t('setting:department')}</TableCell>
              <TableCell align="left">{t('setting:job-position')}</TableCell>
              <TableCell align="left">{t('setting:time')}</TableCell>
              <TableCell align="left">{t('setting:permission')}</TableCell>
              <TableCell align="left">{t('setting:activated')}</TableCell>
              <TableCell align="center">{t('setting:profile')}</TableCell>
              <TableCell align="center">{t('setting:action')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataUser.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.phone}</TableCell>
                <TableCell align="left">{row.department}</TableCell>
                <TableCell align="left">{row.jobPosition}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
                <TableCell align="left">{row.permission}</TableCell>
                <TableCell align="center">
                  <CommonStyles.Button color="icon" borderRadius="round" icon={<CheckCircleOutlineIcon />} />
                </TableCell>
                <TableCell align="center">
                  <CommonStyles.Button color="icon" borderRadius="round" icon={<CheckCircleOutlineIcon />} />
                </TableCell>
                <TableCell align="center" sx={{ display: 'flex', gap: '5px' }}>
                  <CommonStyles.Button color="icon" borderRadius="round" icon={<EditIcon />} />
                  <CommonStyles.Button
                    color="icon"
                    borderRadius="round"
                    icon={<DeleteIcon />}
                    onClick={() => {
                      setConfirmDialof({
                        ...confirmDialog,
                        isOpen: true,
                        title: 'Are you sure to delete this User?',
                        subtitle: "You can't undo this operation",
                      });
                    }}
                    // onClick={}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EmployeeTable;
