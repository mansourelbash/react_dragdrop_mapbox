import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { AiOutlineClose } from 'react-icons/ai'; 
import { addWidget } from './widgetSlice'; 
import { useDispatch } from 'react-redux';
import getChartData from './chartUtils';

const NewWidgetModal = ({ onClose, locationId, locationName }) => {
  const [sectionName, setSectionName] = useState('');
  const [chartType, setChartType] = useState('line');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleConfirmWidget = () => {
    if (!sectionName.trim()) {
      setError('Please enter the widget title.');
      return;
    }
    const { series, options, height } = getChartData(chartType);
    const widgetData = { series, options, height };
    const widgetPayload = { locationId, locationName, sectionName, chartType, chartData: widgetData };
    dispatch(addWidget(widgetPayload));
    onClose();
  };

  const handleChangeChartType = (e) => {
    setChartType(e.target.value);
  };

  const renderChartPreview = () => {
    switch (chartType) {
      case 'line':
        return (
          <Chart
            type="line"
            series={[{ name: 'Series 1', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] }]}
            options={{ chart: { id: 'line-chart' } }}
            height="200"
          />
        );
      case 'bar':
        return (
          <Chart
            type="bar"
            series={[{ name: 'Series 1', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] }]}
            options={{ chart: { id: 'bar-chart' } }}
            height="200"
          />
        );
      case 'area':
        return (
          <Chart
            type="area"
            series={[{ name: 'Series 1', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] }]}
            options={{ chart: { id: 'area-chart' } }}
            height="200"
          />
        );
      case 'pie':
        return (
          <Chart
            type="pie"
            series={[44, 55, 13, 43, 22]}
            options={{ chart: { id: 'pie-chart' } }}
            height="200"
          />
        );
      case 'donut':
        return (
          <Chart
            type="donut"
            series={[44, 55, 13, 43, 22]}
            options={{ chart: { id: 'donut-chart' } }}
            height="200"
          />
        );
      case 'radar':
        return (
          <Chart
            type="radar"
            series={[{ name: 'Series 1', data: [80, 50, 30, 40, 100, 20] }]}
            options={{ chart: { id: 'radar-chart' } }}
            height="200"
          />
        );
      case 'scatter':
        return (
          <Chart
            type="scatter"
            series={[{ name: 'Series 1', data: [[10, 20], [20, 30], [30, 40], [40, 50], [50, 60]] }]}
            options={{ chart: { id: 'scatter-chart' } }}
            height="200"
          />
        );
      case 'bubble':
        return (
          <Chart
            type="bubble"
            series={[{ name: 'Series 1', data: [{ x: 10, y: 20, z: 30 }, { x: 20, y: 30, z: 40 }, { x: 30, y: 40, z: 50 }, { x: 40, y: 50, z: 60 }, { x: 50, y: 60, z: 70 }] }]}
            options={{ chart: { id: 'bubble-chart' } }}
            height="200"
          />
        );
      case 'heatmap':
        return (
          <Chart
            type="heatmap"
            series={[{ name: 'Series 1', data: [{ x: 'Monday', y: 1, value: 20 }, { x: 'Tuesday', y: 2, value: 30 }, { x: 'Wednesday', y: 3, value: 25 }, { x: 'Thursday', y: 4, value: 40 }, { x: 'Friday', y: 5, value: 50 }] }]}
            options={{ chart: { id: 'heatmap-chart' } }}
            height="200"
          />
        );
      case 'candlestick':
        return (
          <Chart
            type="candlestick"
            series={[{ data: [{ x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] }, { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] }] }]}
            options={{ chart: { id: 'candlestick-chart' } }}
            height="200"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="modal-overlay fixed inset-0 bg-gray-900 opacity-50"></div>
      <div className="modal-content modal-new-content bg-white rounded-lg p-8 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4">Insert New Widget</h2>
        <div className="absolute right-5 top-5 mt-2 ml-2">
          <AiOutlineClose className="text-gray-500 cursor-pointer" onClick={onClose} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Widget Title:</label>
          <input className="input-field" type="text" value={sectionName} onChange={(e) => setSectionName(e.target.value)} />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Chart Type:</label>
          <select className="input-field" value={chartType} onChange={handleChangeChartType}>
          <option value="line">Line Chart</option>
            <option value="bar">Bar Chart</option>
            <option value="area">Area Chart</option>
            <option value="pie">Pie Chart</option>
            <option value="donut">Donut Chart</option>
            <option value="radar">Radar Chart</option>
            <option value="scatter">Scatter Chart</option>
            <option value="bubble">Bubble Chart</option>
            <option value="heatmap">Heatmap Chart</option>
            <option value="candlestick">Candlestick Chart</option>
          </select>
        </div>
        {renderChartPreview()}
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleConfirmWidget}>OK</button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default NewWidgetModal;
