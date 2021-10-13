import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "./Table.css";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

// use momentjs for time
// column names
const columns = [
  {
    title: "Interval ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Timestamp",
    dataIndex: "ts",
    key: "ts",
    render: (text, record, index) => {
      const timeFormatted = moment(text).format("MMMM Do YYYY, h:mm:ss a");
      return timeFormatted;
    },
  },
  {
    title: "Score",
    dataIndex: "score",
    key: "score",
  },
];

const TableComponent = () => {
  let history = useHistory();
  const [tableData, setTableData] = useState();
  let { userId } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:3100/intervals/" + userId)
      .then(function (response) {
        setTableData(response.data.intervals);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [userId]);

  if (!tableData) {
    return <div>Loading Data...</div>;
  }
  return (
    <div className="table-container">
      <Table
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              history.push(`/intervals/${userId}/${record.id}`);
            },
          };
        }}
        dataSource={tableData}
        columns={columns}
      />
    </div>
  );
};

export default TableComponent;
