import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const DeckChartCSL = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    const white = props.white;
    const blue = props.blue;
    const black = props.black;
    const red = props.red;
    const green = props.green;

    setChartData({
      labels: ["White", "Blue", "Black", "Red", "Green"],
      datasets: [
        {
          label: "Colors",
          data: [white, blue, black, red, green],
          backgroundColor: [
            `rgb(249, 250, 244)`,
            `rgb(14, 104, 171)`,
            `rgb(21, 11, 0)`,
            `rgb(211, 32, 42)`,
            `rgb(0, 115, 62)`,
          ],
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
    <div className="deckChart" style={{ height: "300px", width: "500px" }}>
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
