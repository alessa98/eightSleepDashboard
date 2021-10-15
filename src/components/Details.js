import React, { useEffect, useState } from "react";
import "./Details.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import RadialChart from "./RadialChart";
import LineGraphCarousel from "./Carousel";
import moment from "moment";

function Details() {
  const [intervalData, setIntervalData] = useState();
  let { userId, intervalId } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3100/intervals/" + userId)
      .then(function (response) {
        const interval = response.data.intervals.find(
          (interval) => interval.id === intervalId
        );
        setIntervalData(interval);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userId, intervalId]);

  if (!intervalData) {
    return (
      <div style={{ color: "white", fontSize: "36px" }}>Loading Data...</div>
    );
  }
  // group by sleep stage and sum their durations
  const groupByStage = intervalData.stages.reduce((breakdown, stageObj) => {
    if (!breakdown[stageObj.stage]) {
      return {
        ...breakdown,
        [stageObj.stage]: stageObj.duration,
      };
    } else {
      return {
        ...breakdown,
        [stageObj.stage]: breakdown[stageObj.stage] + stageObj.duration,
      };
    }
  }, {});
  // transform into format that Radial Chart accepts
  const stageArr = Object.entries(groupByStage);
  const intData = stageArr.map((v) => {
    return {
      stage: v[0],
      duration: v[1],
      color: Math.floor(Math.random() * 16777215).toString(16),
    };
  });

  const timeseriesData = [
    intervalData.timeseries.tnt,
    intervalData.timeseries.tempRoomC,
    intervalData.timeseries.tempBedC,
    intervalData.timeseries.respiratoryRate,
    intervalData.timeseries.heartRate,
    intervalData.timeseries.heating,
  ];

  const mapper = (t) => {
    return {
      timestamp: moment(t[0]).format("MMMM Do YYYY, h:mm:ss a"),
      value: t[1],
    };
  };

  const alltsData = timeseriesData.map((arr) => arr.map(mapper));
  // account for edge case where array doesn't exist
  const tsDataFinal = alltsData.map((arr) => (arr.length === 0 ? [{}] : arr));
  console.log(tsDataFinal);

  return (
    <div className="details-container">
      <div className="radial-chart-container">
        <h3 className="stage-breakdown-title">Your Sleep Stage Breakdown</h3>
        <RadialChart intervalData={intData} />
      </div>
      <div className="carousel-container">
        <LineGraphCarousel
          data1={tsDataFinal[0]}
          data2={tsDataFinal[1]}
          data3={tsDataFinal[2]}
          data4={tsDataFinal[3]}
          data5={tsDataFinal[4]}
        />
      </div>
    </div>
  );
}

export default Details;
