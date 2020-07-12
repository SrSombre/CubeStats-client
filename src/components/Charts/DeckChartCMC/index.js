import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const DeckChartCMC = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    const zero = props.zero;
    const one = props.one;
    const two = props.two;
    const three = props.three;
    const four = props.four;
    const five = props.five;
    const six = props.six;
    const seven = props.seven;
    const eight = props.eight;
    const nine = props.nine;
    const ten = props.ten;
    const eleven = props.eleven;
    const twelve = props.twelve;
    const thirteen = props.thirteen;
    const fourteen = props.fourteen;
    const fifteen = props.fifteen;

    setChartData({
      labels: [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
      ],
      datasets: [
        {
          label: "Mana curve",
          data: [
            zero,
            one,
            two,
            three,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten,
            eleven,
            twelve,
            thirteen,
            fourteen,
            fifteen,
          ],
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
    <div className="deckChart" style={{ height: "200px", width: "500px" }}>
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
