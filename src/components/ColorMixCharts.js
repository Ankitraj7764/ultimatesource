import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ColorMixCharts = () => {
  const chartRefs = useRef([]);

  useEffect(() => {
    const colors = [
      ["#FF6384", "#36A2EB", "#FFCE56"],
      ["#FF0000", "#00FF00", "#0000FF"],
      ["#FF00FF", "#FFFF00", "#00FFFF"],
      ["#800080", "#008000", "#000080"],
      ["#FFA500", "#008080", "#800000"],
      ["#FF4500", "#FFD700", "#006400"],
      ["#4B0082", "#8B0000", "#FF1493"],
      ["#9370DB", "#7CFC00", "#F08080"]
    ];

    const chartData = [
      [20, 30, 50],
      [40, 10, 50],
      [10, 60, 30],
      [30, 50, 20],
      [50, 20, 30],
      [30, 40, 30],
      [60, 20, 20],
      [20, 20, 60]
    ];

    const createChart = (ctx, data, colors) => {
      new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Part 1", "Part 2", "Part 3"],
          datasets: [
            {
              data: data,
              backgroundColor: colors
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    };

    chartRefs.current = Array(8).fill().map((_, index) => chartRefs.current[index] || React.createRef());

    chartRefs.current.forEach((chartRef, index) => {
      const ctx = chartRef.current.getContext("2d");
      createChart(ctx, chartData[index], colors[index]);
    });
  }, []);

  return (
    <div>
      {chartRefs.current.map((chartRef, index) => (
        <canvas key={index} ref={chartRef}></canvas>
      ))}
    </div>
  );
};

export default ColorMixCharts;
