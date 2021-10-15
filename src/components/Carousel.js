import { Carousel } from "antd";
import LineGraph from "./LineGraph";
import "./Carousel.css";

function onChange(a, b, c) {
  console.log(a, b, c);
}

const LineGraphCarousel = ({ data1, data2, data3, data4, data5 }) => {
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={{ margin: "20px", color: "white" }}>Tosses and Turns</h3>
        <div>
          <LineGraph data={data1} />
        </div>
      </div>
      <div>
        <h3 style={{ margin: "20px", color: "white" }}>
          Room Temperature in C
        </h3>
        <div>
          <LineGraph data={data2} />
        </div>
      </div>
      <div>
        <h3 style={{ margin: "20px", color: "white" }}>Bed Temperature in C</h3>
        <div>
          <LineGraph data={data3} />
        </div>
      </div>
      <div>
        <h3 style={{ margin: "20px", color: "white" }}>Breaths Per Minute</h3>
        <div>
          <LineGraph data={data4} />
        </div>
      </div>
      <div>
        <h3 style={{ margin: "20px", color: "white" }}>
          Heart Rate Per Minute
        </h3>
        <div>
          <LineGraph data={data5} />
        </div>
      </div>
    </Carousel>
  );
};

export default LineGraphCarousel;
