import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const DeckChartCSL = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["Creatures", "Spells", "Land"],
      datasets: [
        {
          label: "CSL",
          data: [13, 12, 16, 0],
          backgroundColor: [`rgba(75, 192, 192, 1)`],
          borderColor: `rgba(0,0,0,1)`,
          borderwidth: 2,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="deckChart" style={{ height: "300px", width: "300px" }}>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZeto: true,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 20,
                  beginAtZeto: true,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
};

export default DeckChartCSL;
