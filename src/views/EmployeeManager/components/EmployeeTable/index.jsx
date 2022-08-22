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

const columns = [{ id: 1, name: '' }];

const dataUser = [
  {
    id: 1,
    name: 'Đoàn Tuấn Anh',
    email: 'doantuananh@gmail.com',
    phone: '0912345678',
    department: 'Marketing',
    jobPosition: 'Nhân viên',
    time: '28 / 08 / 2021',
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
    time: '28 / 08 / 2021',
    permission: 'Nhân viên',
    buttonCheck: <CommonStyles.Button type="icon" borderRadius="round" icon={<CheckCircleOutlineIcon />} />,
    buttonEdit: <CommonStyles.Button type="icon" borderRadius="round" icon={<EditIcon />} />,
    buttonDelete: <CommonStyles.Button type="icon" borderRadius="round" icon={<DeleteIcon />} />,
  },
];

const EmployeeTable = (props) => {
  //! State
  const { confirmDialog, setConfirmDialof } = props;

  //! Function

  //! Render
  return (
    <div className="employeeManager-table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">HỌ VÀ TÊN </TableCell>
              <TableCell align="left">EMAIL ĐĂNG NHẬP </TableCell>
              <TableCell align="left">SỐ ĐIỆN THOẠI </TableCell>
              <TableCell align="left">PHÒNG BAN </TableCell>
              <TableCell align="left">VỊ TRÍ CÔNG VIỆC </TableCell>
              <TableCell align="left">NGÀY TẠO </TableCell>
              <TableCell align="left">QUYỀN </TableCell>
              <TableCell align="center">KÍCH HOẠT </TableCell>
              <TableCell align="center">PROFILE </TableCell>
              <TableCell align="center">HÀNH ĐỘNG</TableCell>
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
                  <CommonStyles.Button type="icon" borderRadius="round" icon={<CheckCircleOutlineIcon />} />
                </TableCell>
                <TableCell align="center">
                  <CommonStyles.Button type="icon" borderRadius="round" icon={<CheckCircleOutlineIcon />} />
                </TableCell>
                <TableCell align="center">
                  <CommonStyles.Button type="icon" borderRadius="round" icon={<EditIcon />} />
                  <CommonStyles.Button
                    type="icon"
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
