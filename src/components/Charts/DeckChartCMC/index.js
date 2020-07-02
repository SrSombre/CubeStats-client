import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const DeckChart = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["White", "Blue", "Black", "Red", "Green"],
      datasets: [
        {
          label: "CMC",
          data: [1, 2, 5, 9, 3],
          backgroundColor: [`rgba(75, 192, 291, 0.6)`],
          borderwidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="deckChart" style={{ height: "300px", width: "300px" }}>
      <Line
        data={chartData}
        options={{
          responsive: true,
        }}
      />
    </div>
  );
};

export default DeckChart;
