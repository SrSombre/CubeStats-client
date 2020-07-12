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
            `rgb(212, 211, 211)`,
            `rgb(69, 172, 96)`,
            `rgb(136, 151, 64)`,
            `rgb(223, 242, 129)`,
            `rgb(114, 229, 242)`,
            `rgb(247, 180, 44)`,
            `rgb(245, 62, 34)`,
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
