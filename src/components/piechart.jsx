// PieChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({data,isBottom=true}) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: data.map(item => item.label),
        datasets: [{
          data: data.map(item => item.value),
          backgroundColor: data.map(item => item.color)
        }]
      },
      options: {
        plugins: {
          legend: {
            position:isBottom?'bottom':'right',
            labels: {
               maxItemsPerLine: 1
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PieChart;
