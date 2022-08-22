import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CommonStyles from 'components/CommonStyles';
import SelectInputHome from 'components/CommonStyles/SelectInputHome';
import CommonReportPage from 'components/CommonReportPage';

const dataBarChart = {
  labels: ['Tiến độ', 'Tự tin'],
  datasets: [
    {
      id: 1,
      data: [1, 2],
      backgroundColor: '#18202E',
    },
    {
      id: 2,
      data: [2, 1],
      backgroundColor: '#5E636D',
    },
    {
      id: 3,
      data: [3, 4],
      backgroundColor: '#8C9097',
    },
    {
      id: 4,
      data: [3, 4],
      backgroundColor: '#D1D2D5',
    },
  ],
};

const dataPieChart = {
  datasets: [
    {
      data: [40, 25, 20, 15],
      backgroundColor: ['#18202E', '#5E636D', '#8C9097', '#D1D2D5'],
    },
  ],
  labels: ['Red', 'Orange', 'Yellow', 'Green'],
};

const dataStackChart = {
  labels: ['OKRs 01'],
  datasets: [
    {
      data: [1],
      backgroundColor: '#18202E',
    },
    {
      data: [3],
      backgroundColor: '#5E636D',
    },
    {
      data: [2],
      backgroundColor: '#8C9097',
    },
    {
      data: [2],
      backgroundColor: '#D1D2D5',
    },
  ],
};

const noteChart2 = [
  { color: '#18202E', label: 'Chưa thực hiện Check-in' },
  { color: '#5E636D', label: 'Check-in muộn' },
  { color: '#8C9097', label: 'Quá hạn Check-in' },
  { color: '#D1D2D5', label: 'Check-in đúng hạn' },
];
const noteChart = [
  { color: '#18202E', label: 'OKRs tiến độ 0%' },
  { color: '#5E636D', label: 'OKRs tiến độ 1-40%' },
  { color: '#8C9097', label: 'OKRs tiến độ 41-70%' },
  { color: '#D1D2D5', label: 'OKRs tiến độ trên 70%' },
];

const listOption = [{ value: 1, label: 'a' }];

const Report = () => {
  const { t } = useTranslation();
  return (
    <div className="report-page">
      <div className="report-title">
        <div className="title">{t('report:report')}</div>
        <div className="title-btn">
          <CommonStyles.Button innerText="OKRs" type="primary" />
          <CommonStyles.Button innerText="OFRs" />
        </div>
      </div>
      <div className="statistical">
        <div className="statistical-top">
          <div className="title">{t('report:okrs-progress')}</div>
          <div className="filter">
            <SelectInputHome placeholder={t('report:choose-rank')} width="266px" listOption={listOption} />
            <SelectInputHome placeholder={t('report:choose-okrs')} width="266px" listOption={listOption} />
          </div>
        </div>
        <div className="content">
          <CommonReportPage.ChartCart
            dataChart={dataBarChart}
            chartName={t('report:by-department')}
            typeChart="bar"
            noteChart={noteChart}
          />
          <CommonReportPage.ChartCart
            dataChart={dataPieChart}
            chartName={t('report:by-individual')}
            typeChart="pie"
            noteChart={noteChart}
          />
        </div>
      </div>

      <div className="discipline-title">{t('report:discipline-checkin')}</div>
      <div className="statistical">
        <div className="statistical-top">
          <div className="title">{t('report:statistical-okrs-department')}</div>
          <div className="filter">
            <SelectInputHome placeholder={t('report:choose-rank')} width="266px" listOption={listOption} />
            <SelectInputHome placeholder={t('report:choose-okrs')} width="266px" listOption={listOption} />
          </div>
        </div>
        <div className="content">
          <CommonReportPage.ChartCart
            dataChart={dataStackChart}
            chartName={t('report:statistical-checkin')}
            typeChart="stack"
            noteChart={noteChart2}
          />
          <CommonReportPage.ChartCart
            dataChart={dataStackChart}
            chartName={t('report:statistical-checkin')}
            typeChart="stack"
            noteChart={noteChart2}
          />
        </div>
      </div>
      <div className="statistical" style={{ marginTop: '16px' }}>
        <div className="statistical-top">
          <div className="title">{t('report:statistical-okrs-individual')}</div>
          <div className="filter">
            <SelectInputHome placeholder={t('report:choose-rank')} width="266px" listOption={listOption} />
            <SelectInputHome placeholder={t('report:choose-okrs')} width="266px" listOption={listOption} />
          </div>
        </div>
        <div className="content">
          <CommonReportPage.ChartCart
            dataChart={dataStackChart}
            chartName={t('report:statistical-checkin')}
            typeChart="stack"
            noteChart={noteChart2}
          />
          <CommonReportPage.ChartCart
            dataChart={dataStackChart}
            chartName={t('report:statistical-checkin')}
            typeChart="stack"
            noteChart={noteChart2}
          />
        </div>
      </div>
    </div>
  );
};

export default Report;
