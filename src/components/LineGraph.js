import React from "react";
import { Line } from "@ant-design/charts";
import "./LineGraph.css";

const LineGraph = ({ data }) => {
  const config = {
    data,
    xField: Object.keys(data[0])[0],
    yField: Object.keys(data[0])[1],
    point: {
      size: 5,
      shape: "diamond",
    },
  };
  return <Line {...config} />;
};

export default LineGraph;
