import React, { useState, useRef, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import CommonStyles from 'components/CommonStyles';
import CommonIcon from 'components/icons';
import useGetListCheckin from 'hooks/checkin/useGetListCheckin';
import { BASE_URL } from 'constants/api';
import { Box, LinearProgress } from '@mui/material';
import { useEffect } from 'react';
import useGetListDepartment from 'hooks/department/useGetListDepartments';
import { dateToQuarter } from 'helpers/dateToQuarter';
import CheckinResult from './CheckinModal/CheckinResult';
import CheckinMeeting from './CheckinModal/CheckinMeeting';
import CheckinDetail from './CheckinModal/CheckinDetail';
import useGetcheckinDetail from 'hooks/checkin/useGetCheckinDetail';
import { useHistory } from 'react-router-dom';

const style = {
  searchBox: {
    width: '300px',
    border: '0',
    borderRadius: '0',
    height: '40px',
  },
  responseBtn: {
    width: '135px',
    border: 'solid 2px #c5c6c8',
    background: 'transparent',
  },
};

const Checkin = () => {
  //! State
  const { t } = useTranslation();
  const debounceRef = useRef();
  const history = useHistory();
  const [Department, setDepartment] = useState();
  const [quarter, setQuarter] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [listCheckinData, loading] = useGetListCheckin({
    page: currentPage,
    search: searchValue,
    department: Department,
    created_time__range: quarter,
  });
  const [listDepartmentData] = useGetListDepartment();
  const { listCheckin, total } = listCheckinData;
  const quarterOptions = dateToQuarter();
  const [openResult, setOpenResult] = useState(false);
  const [id, setId] = useState();
  const [currentResult, setCurrentResult] = useState();
  const [meetingOpen, setMeetingOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);

  //!Function

  const handleDepartment = (value) => {
    setCurrentPage(1);
    setSearchValue('');
    setDepartment(value);
  };

  const handleQuarter = (value) => {
    setCurrentPage(1);
    setSearchValue('');
    setQuarter(value);
  };

  const handleSearchValue = (value) => {
    debounceRef.current && clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setCurrentPage(1);
      setSearchValue(value);
    }, 500);
  };

  useEffect(() => {
    return () => {
      clearTimeout(debounceRef.current);
    };
  }, []);

  const handleResponse = () => {};

  const handlePageBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleResultClose = () => {
    setId(null);
    setOpenResult(false);
  };

  const handleMeetingClose = () => {
    setMeetingOpen(false);
  };

  const handleDetailClose = () => {
    setId(null);
    setDetailOpen(false);
  };

  //!Render
  return (
    <Fragment>
      <CheckinMeeting open={meetingOpen} handleClose={handleMeetingClose} id={id} />
      <CheckinResult open={openResult} handleClose={handleResultClose} id={id} title={currentResult} />
      {detailOpen && <CheckinDetail open={detailOpen} handleClose={handleDetailClose} id={id} />}
      <div className="checkInPage">
        <div className="title">{t('common:check-in')}</div>
        <div className="header">
          <div className="utilities">
            <CommonStyles.SelectInputHome
              onChangeSelectInput={handleDepartment}
              listOption={listDepartmentData}
              placeholder={t('common:options')}
              width="300px"
            />
            <CommonStyles.SelectInputHome
              onChangeSelectInput={handleQuarter}
              listOption={quarterOptions}
              placeholder={t('common:quarter', { key: '' })}
              width="157px"
            />
            <CommonStyles.Input
              onChange={(e) => handleSearchValue(e.target.value)}
              placeholder={t('common:search')}
              icon={<CommonIcon.Search />}
              style={style.searchBox}
            />
          </div>
          <div className="response">
            <CommonStyles.Button
              innerText={t('common:response')}
              onClick={handleResponse}
              icon={<CommonIcon.bubble style={{ transform: 'rotateY(180deg)', height: '16px', width: '16px' }} />}
              borderRadius="round"
              style={style.responseBtn}
            />
          </div>
        </div>
        <div className="content">
          <div className="content__header">OKRs</div>
          {loading ? (
            <Box>
              <LinearProgress />
            </Box>
          ) : (
            <table className="checkinTable">
              <thead>
                <tr className="checkinHeader">
                  <th className="checkinHeader__content">{t('common:goal')}</th>
                  <th className="checkinHeader__content">{t('common:main-result')}</th>
                  <th className="checkinHeader__content">{t('common:progress')}</th>
                  <th className="checkinHeader__content">{t('common:change')}</th>
                  <th className="checkinHeader__content">{t('common:employee')}</th>
                  <th className="checkinHeader__content">{t('common:confidence')}</th>
                  <th className="checkinHeader__content">{t('common:status')}</th>
                </tr>
              </thead>
              <tbody>
                {listCheckin?.map((checkin, index) => {
                  return (
                    <tr
                      className="checkinBody"
                      key={index}
                      onClick={() => {
                        setId(checkin.id);
                      }}
                    >
                      <td className="checkinBody__content" style={{ width: '350px' }}>
                        <div className="goal">{checkin.goal}</div>
                      </td>
                      <td className="checkinBody__content">
                        <div
                          className="result"
                          onClick={() => {
                            setId(checkin.id);
                            setCurrentResult(checkin.goal);
                            setOpenResult(true);
                          }}
                        >{`${checkin.mainResult} ${
                          checkin.mainResult > 1 ? t('common:results') : t('common:result')
                        }`}</div>
                      </td>
                      <td className="checkinBody__content">
                        <div className="progress">{`${(checkin.progress * 100).toFixed(2)}%`}</div>
                      </td>
                      <td className="checkinBody__content">
                        <div>{`${checkin.change}%`}</div>
                      </td>
                      <td className="checkinBody__content">
                        <div className="user">
                          <div
                            className="avatar"
                            style={
                              checkin.employeeAva && { backgroundImage: `url(${BASE_URL + checkin?.employeeAva})` }
                            }
                          >
                            {!checkin.employeeAva && checkin.employee[0].toUpperCase()}
                          </div>
                          <div>{`${checkin.employee}`}</div>
                        </div>
                      </td>
                      <td className="checkinBody__content">
                        <div>{checkin.confidence}</div>
                      </td>

                      <td className="checkinBody__content">
                        {!checkin.isDone ? (
                          <div className="status-box">
                            <div className="meeting" onClick={() => setMeetingOpen(true)}>
                              Tạo Phòng Họp
                            </div>
                            <div
                              className="status"
                              onClick={() => {
                                setId(checkin.id);
                                setDetailOpen(true);
                              }}
                            >{`${checkin.status}`}</div>
                          </div>
                        ) : (
                          <div className="status-box">
                            <div
                              className="status"
                              onClick={() => {
                                setId(checkin.id);
                                setDetailOpen(true);
                              }}
                            >
                              Đã hoàn thành
                            </div>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <div className="paging">
          <CommonStyles.Button
            innerText={t('common:back')}
            color={currentPage === 1 || loading ? 'secondary' : 'primary'}
            borderRadius="round"
            onClick={handlePageBack}
            disabled={currentPage === 1 || loading}
          />
          <CommonStyles.Button
            innerText={t('common:next')}
            color={currentPage === Math.ceil(total / 5) || loading ? 'secondary' : 'primary'}
            borderRadius="round"
            onClick={handlePageNext}
            disabled={currentPage === Math.ceil(total / 5) || loading}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Checkin;
