import React from 'react';
import Chart from 'react-apexcharts';

const getChartData = (chartType) => {
  let chartData = {};

  switch (chartType) {
    case 'line':
      chartData = {
        series: [{ name: 'Series 1', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] }],
        options: { chart: { id: 'line-chart' } },
        height: '200'
      };
      break;
    case 'bar':
      chartData = {
        series: [{ name: 'Series 1', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] }],
        options: { chart: { id: 'bar-chart' } },
        height: '200'
      };
      break;
    case 'area':
      chartData = {
        series: [{ name: 'Series 1', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] }],
        options: { chart: { id: 'area-chart' } },
        height: '200'
      };
      break;
    case 'pie':
      chartData = {
        series: [44, 55, 13, 43, 22],
        options: { chart: { id: 'pie-chart' } },
        height: '200'
      };
      break;
    case 'donut':
      chartData = {
        series: [44, 55, 13, 43, 22],
        options: { chart: { id: 'donut-chart' } },
        height: '200'
      };
      break;
    case 'radar':
      chartData = {
        series: [{ name: 'Series 1', data: [80, 50, 30, 40, 100, 20] }],
        options: { chart: { id: 'radar-chart' } },
        height: '200'
      };
      break;
    case 'scatter':
      chartData = {
        series: [{ name: 'Series 1', data: [[10, 20], [20, 30], [30, 40], [40, 50], [50, 60]] }],
        options: { chart: { id: 'scatter-chart' } },
        height: '200'
      };
      break;
    case 'bubble':
      chartData = {
        series: [{ name: 'Series 1', data: [{ x: 10, y: 20, z: 30 }, { x: 20, y: 30, z: 40 }, { x: 30, y: 40, z: 50 }, { x: 40, y: 50, z: 60 }, { x: 50, y: 60, z: 70 }] }],
        options: { chart: { id: 'bubble-chart' } },
        height: '200'
      };
      break;
    case 'heatmap':
      chartData = {
        series: [{ name: 'Series 1', data: [{ x: 'Monday', y: 1, value: 20 }, { x: 'Tuesday', y: 2, value: 30 }, { x: 'Wednesday', y: 3, value: 25 }, { x: 'Thursday', y: 4, value: 40 }, { x: 'Friday', y: 5, value: 50 }] }],
        options: { chart: { id: 'heatmap-chart' } },
        height: '200'
      };
      break;
    case 'candlestick':
      chartData = {
        series: [{ data: [{ x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] }, { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] }] }],
        options: { chart: { id: 'candlestick-chart' } },
        height: '200'
      };
      break;
    default:
      break;
  }

  return chartData;
};

export default getChartData;
