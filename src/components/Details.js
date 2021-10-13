import React, { useEffect, useState } from "react";
import "./Details.css";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import RadialChart from "./RadialChart";
import LineGraphCarousel from "./Carousel";

// todo:
// css -- carousel options below chart, chart width and size
// modularizing the code so it's not hard coded
// sticky header
// case 6 being null -- handling this case

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
    return <div>Loading Data...</div>;
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

  const mapper = (t) => {
    return {
      timestamp: t[0],
      value: t[1],
    };
  };

  // linegraph logic
  const test1 = intervalData.timeseries.tnt.map(mapper);
  const test2 = intervalData.timeseries.tempRoomC.map(mapper);
  const test3 = intervalData.timeseries.tempBedC.map(mapper);
  const test4 = intervalData.timeseries.respiratoryRate.map(mapper);
  const test5 =
    intervalData.timeseries.heartRate &&
    intervalData.timeseries.heartRate.map(mapper);

  // const test6 = intervalData.timeseries.heating.map((t) => {
  //   return {
  //     timestamp: t[0],
  //     value: t[1],
  //   };
  // });

  return (
    <div className="details-container">
      <div className="radial-chart-container">
        <h3 className="stage-breakdown-title">Your Sleep Stage Breakdown</h3>
        <RadialChart intervalData={intData} />
      </div>
      <div className="carousel-container">
        <LineGraphCarousel
          data1={test1}
          data2={test2}
          data3={test3}
          data4={test4}
          data5={test5}
        />
      </div>
    </div>
  );
}

export default Details;
