import { Card, Col, Row } from "antd";
import { List } from "rc-field-form";
import React from "react";
import Logo from "../Assets/blaq_logo_text_color.png";
import "./Footer.css";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  LinkedinFilled,
} from "@ant-design/icons";

const main = {
  backgroundColor: "white",
  height: "maxContent",
  marginTop: "20px",
  paddingTop: "20px",
  //paddingLeft: "20px",
  paddingBottom: "10px",
  boxShadow: "0 -5px 5px -5px #333",
  border: "1px solid #ccc",
  //zIndex: "100",
};
const list = ["ABOUT US", "TERMS & CONDITIONS", "PRIVACY POLICY", "CONTACT US"];

const Footer = () => {
  return (
    <div style={main}>
      <Row>
        <Col lg={6} md={24} xs={24}>
          <img
            src={Logo}
            style={{ width: "150px", height: "50px", marginLeft: "20px" }}
          />
        </Col>
        <Col lg={12} md={24} xs={24}>
          <ul style={{ paddingTop: "10px", paddingRight: "30px" }}>
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </Col>
        <Col lg={6} md={24} xs={24}>
          <div style={{ paddingLeft: "40px" }}>
            <FacebookFilled
              style={{ color: "red", marginLeft: "10px", fontSize: "40px" }}
            />
            <TwitterCircleFilled
              style={{ color: "red", marginLeft: "10px", fontSize: "40px" }}
            />
            <InstagramFilled
              style={{ color: "red", marginLeft: "10px", fontSize: "40px" }}
            />
            <LinkedinFilled
              style={{ color: "red", marginLeft: "10px", fontSize: "40px" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
