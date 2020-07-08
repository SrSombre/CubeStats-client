import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const DeckChartCMC = (props) => {
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

export default DeckChartCMC;
