import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const TypeChart = (props) => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    const artifact = props.artifact;
    const creature = props.creature;
    const land = props.land;
    const enchantment = props.enchantment;
    const planeswalker = props.planeswalker;
    const sorcery = props.sorcery;
    const instant = props.instant;

    setChartData({
      labels: [
        "artifact",
        "creature",
        "land",
        "enchantment",
        "planeswalker",
        "sorcery",
        "instant",
      ],
      datasets: [
        {
          label: "Spelltypes",
          data: [
            artifact,
            creature,
            land,
            enchantment,
            planeswalker,
            sorcery,
            instant,
          ],
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
      <Doughnut
        data={chartData}
        options={{
          responsive: true,
        }}
      />
    </div>
  );
};

export default TypeChart;
