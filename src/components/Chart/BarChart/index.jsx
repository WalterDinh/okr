import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const options = {
  responsive: true,
  maintainAspectRatio: false,
  // scales: {
  //   yAxes: [
  //     {
  //       ticks: {
  //         beginAtZero: true,
  //       },
  //     },
  //   ],
  // },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const BarChart = (props) => {
  const { data } = props;
  return <Bar options={options} data={data} />;
};

export default BarChart;
