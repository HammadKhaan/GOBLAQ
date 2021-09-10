import { Card, Col, Row } from "antd";
import { List } from "rc-field-form";
import React from "react";
import Logo from "../Assets/blaq_logo_text_color.png";

const main = {
  backgroundColor: "white",
  height: "maxContent",
  marginTop: "20px",
  paddingTop: "20px",
  paddingLeft: "20px",
  paddingBottom: "10px",
};
const list = ["ABOUT US", "TERMS & CONDITIONS", "PRIVACY POLICY", "CONTACT US"];

const Footer = () => {
  return (
    <div style={main}>
      <Row>
        <Col lg={8} md={24} xs={24}>
          <img src={Logo} style={{ width: "200px", height: "60px" }} />
        </Col>
        <Col lg={8} md={24} xs={24}>
          <List>
            {list.map((item) => (
              <List.Item>
                  {item}
              </List.Item>

            ))}
          </List>
        </Col>
        <Col lg={8} md={24} xs={24}>
          <img src={Logo} style={{ width: "200px", height: "60px" }} />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
