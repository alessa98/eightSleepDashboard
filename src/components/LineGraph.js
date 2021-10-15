import React from "react";
import { Line } from "@ant-design/charts";
import moment from "moment";

const LineGraph = ({ data }) => {
  console.log(Object.keys(data[0])[0]);
  const config = {
    data,
    xField: Object.keys(data[0])[0],
    yField: Object.keys(data[0])[1],
    height: 300,
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "white",
        lineWidth: 2,
      },
    },
  };
  return <Line {...config} />;
};

export default LineGraph;
