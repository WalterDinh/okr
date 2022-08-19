import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

//! Config chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Legend);
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      // position: 'top',
    },
    title: {
      display: false,
      // text: 'Tình trạng CFRs (Trong chu kỳ)',
    },
  },
};

function LineChart(props) {
  const { data } = props;
  return <Line options={options} data={data} />;
}

export default LineChart;
