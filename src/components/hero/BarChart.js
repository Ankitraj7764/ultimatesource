import React from "react";
import Chart from "react-apexcharts";

function BarChart() {
  return (
    <React.Fragment>
      <div className="container-fluid mb-3">
        
        <Chart
          type="bar"
          width={600}
          height={400}
          series={[
            {
              name: "Employee",
              data: [20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
              color: "#0000FF", // First color for all bars
            },
            {
              name: "Employee",
              data: [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135],
              color: "#00008B", // Second color for all bars
            },
            {
              name: "Total",
              data: [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125],
              color: "#4169E1", // Third color for all bars
            },
          ]}
          options={{
            
            chart: {
              stacked: true,
            },
            plotOptions: {
              bar: {
                vertical: true, 
                columnWidth: "60%", 
                endingShape: "rounded", 
              },
            },
            stroke: {
              width: 1,
            },
            yaxis: {
             
              labels: {
                formatter: (val) => `$ ${val}`,
              },
            },
            xaxis: {
              categories: [
                "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80"
              ],
            },
            legend: {
              position: "top",
            },
            dataLabels: {
              enabled: true,
            },
            grid: {
              show: true,
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default BarChart;
