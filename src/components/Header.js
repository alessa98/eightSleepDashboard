import React from "react";
import "./Header.css";
import Logo from "../logo.png";
import { Select } from "antd";
import { useHistory, useParams } from "react-router-dom";
const { Option } = Select;

function Header() {
  let history = useHistory();
  let { userId } = useParams();

  return (
    <div className="header-container">
      <img className="logo-photo" src={Logo} alt="" />
      <div className="dashboard-title">Welcome.</div>
      <div className="user-dropdown">
        <Select
          defaultValue={userId}
          style={{ width: 120 }}
          onSelect={(value) => history.push(`/intervals/${value}`)}
        >
          <Option value="1">User 1</Option>
          <Option value="2">User 2</Option>
          <Option value="3">User 3</Option>
        </Select>
      </div>
    </div>
  );
}

export default Header;
