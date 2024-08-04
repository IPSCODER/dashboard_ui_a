// src/components/ActivityChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import "./chart.css"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartContainer = styled.div`
  background: none;
  padding: 10px;
  margin-bottom: 10px;
  color:#000;
  max-height:320px;
  width:100%;
`;

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Activity',
      color: '#000',
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#000',
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        color: '#000',
      },
      grid: {
        color: '#000',
      },
    },
  },
};

const data = {
  labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25'],
  datasets: [
    {
      label: 'Activity',
      data: [4000, 3000, 2000, 5000, 6000, 7000, 8000, 9000, 10000, 11000],
      backgroundColor: '#6a5acd',
    },
  ],
};

function ActivityChart() {
  return (
    <ChartContainer>
      <Bar options={options} data={data} />
    </ChartContainer>
  );
}

export default ActivityChart;
