import React from "react";
import { RadialBar } from "@ant-design/charts";

const RadialChart = ({ intervalData }) => {
  var config = {
    data: intervalData,
    xField: "stage",
    yField: "duration",
    maxAngle: 270,
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      formatter: function formatter(datum) {
        return {
          name: "duration",
          value: datum.duration,
        };
      },
    },
    colorField: "duration",
    color: intervalData.color,
  };
  return <RadialBar {...config} />;
};

export default RadialChart;
