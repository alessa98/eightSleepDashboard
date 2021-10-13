import { Carousel } from "antd";
import LineGraph from "./LineGraph";

function onChange(a, b, c) {
  console.log(a, b, c);
}

const contentStyle = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const LineGraphCarousel = ({ data1, data2, data3, data4, data5 }) => {
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>Chart 1</h3>
        <div>
          <LineGraph data={data1} />
        </div>
      </div>
      <div>
        <h3 style={contentStyle}>Chart 2</h3>
        <div>
          <LineGraph data={data2} />
        </div>
      </div>
      <div>
        <h3 style={contentStyle}>Chart 3</h3>
        <div>
          <LineGraph data={data3} />
        </div>
      </div>
      <div>
        <h3 style={contentStyle}>Chart 4</h3>
        <div>
          <LineGraph data={data4} />
        </div>
      </div>
      <div>
        <h3 style={contentStyle}>Chart 5</h3>
        <div>
          <LineGraph data={data5} />
        </div>
      </div>
    </Carousel>
  );
};

export default LineGraphCarousel;
