import React from 'react';

import SelectInputHome from 'components/SelectInputHome';
import CommonIcons from 'components/icons';
import LineChart from 'components/Chart/LineChart';
import InputOutForm from 'components/CommonStyles/InputOutForm';

//!Fake data chart
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels,
  datasets: [
    {
      data: [0, 0, 0, 1, 2, 3],
      borderColor: '#000000',
      backgroundColor: '#000000',
    },
    {
      data: [2, 1, 3, 0],
      borderColor: '#8C9097',
      backgroundColor: '#8C9097',
    },
  ],
};

//! Fake data selectInput
const fakeListOption = [{ value: 1, label: 'a' }];

//! Fake data ProgressItem
const dataProgressItem = [
  {
    number: 123,
    percent: 1.2,
    status: 'increase',
    desc: 'OKRs đang tiến triển tốt',
  },
  {
    number: 123,
    percent: 1.2,
    status: 'reduce',
    desc: 'OKRs có rủi ro',
  },
  {
    number: 123,
    percent: 1.2,
    status: 'reduce',
    desc: 'OKRs có rủi ro',
  },
  {
    number: 123,
    percent: 1.2,
    status: 'increase',
    desc: 'OKRs đang tiến triển tốt',
  },
];

//! component ProgressItem
const ProgressItem = ({ item }) => {
  return (
    <div className="progress-item">
      <div>
        <span className="progress-number">{item.number}</span>
        {item.status === 'increase' ? (
          <CommonIcons.CaretUp />
        ) : item.status === 'reduce' ? (
          <CommonIcons.CareDown />
        ) : null}
        <span>{item.percent}%</span>
      </div>
      <div style={{ marginTop: '10px' }}>{item.desc}</div>
    </div>
  );
};

const Dashboard = (props) => {
  return (
    <div className="dashboard-page">
      <div className="title">Dashboard</div>
      <div className="filter">
        <div className="filter-left">
          <SelectInputHome
            width="300px"
            placeholder="Chọn phòng ban"
            // onChangeSelectInput={(data) => console.log(data)}
            listOption={fakeListOption}
          />
          <SelectInputHome width="157px" placeholder="Quý 1-2021" listOption={fakeListOption} />
        </div>
        <div className="filter-right">
          <InputOutForm
            icon={<CommonIcons.Search />}
            placeholder="Tim kiem"
            style={{ width: 300, height: 40, borderRadius: 0 }}
          />
        </div>
      </div>
      <div className="progress">
        <div className="progress-top">
          <div className="title">Tiến độ tuần này</div>
        </div>
        <div className="progress-content">
          {dataProgressItem.map((item, index) => (
            <ProgressItem key={index} item={item} />
          ))}
        </div>
      </div>
      <div className="status">
        <div className="status-top">
          <div className="status-top-left">Tình trạng CFRs (Trong chu kỳ)</div>
          <div className="status-top-right">
            <div className="status-note">
              <div className="note-color" style={{ backgroundColor: '#000000' }}></div>
              <div>Phản hồi</div>
            </div>
            <div className="status-note">
              <div className="note-color" style={{ backgroundColor: '#8C9097' }}></div>
              <div>Ghi nhận</div>
            </div>
          </div>
        </div>
        <div className="status-content">
          <LineChart data={data} />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
