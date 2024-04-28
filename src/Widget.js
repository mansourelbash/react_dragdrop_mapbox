import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { useSelector } from 'react-redux';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Widget = ({ locationName }) => {
  const [gridHeight, setGridHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const widgets = useSelector(state => state.widget.widgets[locationName] || []);

  const calculateWidth = () => {
    const totalCols = 12;
    const widgetsPerRow = 1
    return Math.floor(totalCols / widgetsPerRow);
  };

  const calculateGridHeight = () => {
    const widgetHeight = 450;
    const totalWidgets = widgets.length;
    const totalRows = Math.ceil(totalWidgets / 12);
    return totalRows * widgetHeight;
  };

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setGridHeight(calculateGridHeight());
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [widgets]);

  return (
    <div>
    {widgets && widgets.length > 0 ? (
      isLoading ? (
        <div>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
                marginBottom: '20px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '80%',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '4px',
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              ></div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ height: `${gridHeight}px`, overflowY: 'auto' }}>
          <ResponsiveGridLayout
            className="layout"
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={100}
            draggableHandle=".widget-header"
            isDraggable={true}
            isResizable={true}
            compactType="vertical"
          >
            {widgets.map((widget, index) => (
              <div
                className="widget"
                key={`${locationName}-${index}`}
                data-grid={{ w: calculateWidth(), h: 2, x: 0, y: Infinity }}
              >
                <div className="widget-header" style={{ cursor: 'grab' }}>
                  <h3>{widget.sectionName}</h3>
                  <div
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid',
                      padding: '20px',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {widget.chartType && (
                      <Chart
                        type={widget.chartType}
                        series={widget.chartData.series}
                        options={widget.chartData.options}
                        height="150"
                        width="100%"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </ResponsiveGridLayout>
        </div>
      )
    ) : (
      ''
    )}
  </div>
  
  );
};

export default Widget;
