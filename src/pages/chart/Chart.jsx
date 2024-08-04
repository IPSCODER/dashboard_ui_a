// src/components/ChartComponent.js
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: [], // Will be populated dynamically
  datasets: [
    {
      label: 'Data',
      data: [], // Will be populated dynamically
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const ChartComponent = () => {
  const [chartData, setChartData] = useState(data);

  const updateChartData = (period) => {
    let labels = [];
    let dataPoints = [];

    // Generate dummy data for demonstration
    switch (period) {
      case 'weekly':
        labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
        dataPoints = [12, 19, 3, 5];
        break;
      case 'monthly':
        labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
        dataPoints = [29, 45, 23, 56, 67];
        break;
      case 'yearly':
        labels = ['2021', '2022', '2023'];
        dataPoints = [120, 150, 200];
        break;
      default:
        break;
    }

    setChartData({
      ...chartData,
      labels: labels,
      datasets: [{ ...chartData.datasets[0], data: dataPoints }],
    });
  };

  return (
    <div>
      <div>
        <button onClick={() => updateChartData('weekly')}>Weekly</button>
        <button onClick={() => updateChartData('monthly')}>Monthly</button>
        <button onClick={() => updateChartData('yearly')}>Yearly</button>
      </div>
      <Bar data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default ChartComponent;
