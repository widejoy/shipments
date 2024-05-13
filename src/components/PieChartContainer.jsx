// PieChartContainer.js
import React from 'react';
import PieChart from './piechart';
import './PieChartContainer.css'; // Import CSS for styling
 
const PieChartContainer = () => {
  // Sample data for the pie charts
  const chartData1 = [
    { label: 'Nhava Sheva, India', value: 30, color: 'rgb(107, 18, 10)' },
    { label: 'Hong Kong, Hong Kong', value: 20, color: 'rgb(235, 93, 80)' },
    { label: 'Yantian, China', value: 15, color: 'rgb(247, 166, 104)' },
    { label: 'Dalian, China', value: 25, color: 'rgb(139, 193, 163)' },
    { label: 'London Gateway Port, UK', value: 5, color: 'rgb(16, 115, 230)' },
    { label: 'Other', value: 5, color: 'rgb(133, 101, 98)' }
  ];
  
  const chartData2 = [
    { label: 'Nhava Sheva, India', value: 15, color: 'rgb(107, 18, 10)' },
    { label: 'Hong Kong, Hong Kong', value: 25, color: 'rgb(235, 93, 80)' },
    { label: 'Yantian, China', value: 20, color: 'rgb(247, 166, 104)' },
    { label: 'Dalian, China', value: 15, color: 'rgb(139, 193, 163)' },
    { label: 'London Gateway Port, UK', value: 15, color: 'rgb(16, 115, 230)' },
    { label: 'Other', value: 10, color: 'rgb(133, 101, 98)' }
  ];
  
  const chartData3 = [
    { label: 'Nhava Sheva, India', value: 10, color: 'rgb(107, 18, 10)' },
    { label: 'Hong Kong, Hong Kong', value: 20, color: 'rgb(235, 93, 80)' },
    { label: 'Yantian, China', value: 25, color: 'rgb(247, 166, 104)' },
    { label: 'Dalian, China', value: 20, color: 'rgb(139, 193, 163)' },
    { label: 'London Gateway Port, UK', value: 15, color: 'rgb(16, 115, 230)' },
    { label: 'Other', value: 10, color: 'rgb(133, 101, 98)' }
  ];
  
  const chartData4 = [
    { label: 'Nhava Sheva, India', value: 20, color: 'rgb(107, 18, 10)' },
    { label: 'Hong Kong, Hong Kong', value: 15, color: 'rgb(235, 93, 80)' },
    { label: 'Yantian, China', value: 10, color: 'rgb(247, 166, 104)' },
    { label: 'Dalian, China', value: 30, color: 'rgb(139, 193, 163)' },
    { label: 'London Gateway Port, UK', value: 15, color: 'rgb(16, 115, 230)' },
    { label: 'Other', value: 10, color: 'rgb(133, 101, 98)' }
  ];
  

  return (
    <div className="pie-chart-container">
      <div className="chart-title">Pie Chart Analysis</div>
       <div className="chart-row">
        <PieChart data={chartData1} />
        <PieChart data={chartData2} />
        <PieChart data={chartData3} />
        <PieChart data={chartData4} />
      </div>
    </div>
  );
};

export default PieChartContainer;
