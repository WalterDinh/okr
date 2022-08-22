import Chart from 'components/Chart';
import React from 'react';

const ChartCart = (props) => {
  const { dataChart, chartName, typeChart, noteChart } = props;
  return (
    <div className="chart-cart">
      <div className="top">
        <div className="chart-name">{chartName}</div>
      </div>
      <div className="wrapper-chart">
        <div className="chart">
          {typeChart === 'bar' && <Chart.BarChart data={dataChart} />}
          {typeChart === 'pie' && <Chart.PieChart data={dataChart} />}
          {typeChart === 'stack' && <Chart.StackChart data={dataChart} />}
        </div>
        <div className="note">
          {noteChart.map((item, index) => (
            <div key={index} className="note-item">
              <div className="note-color" style={{ backgroundColor: item.color }}></div>
              <div className="note-content">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChartCart;
