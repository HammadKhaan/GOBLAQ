import React from "react";
import { Button, Carousel, Col, Row } from "antd";
import Image from "../Assets/goblaq_black.jpg";
import Image2 from "../Assets/goblaq_latina.jpg";
import Image3 from "../Assets/goblaq_asian.jpg";
import Logo from "../Assets/logo200.png";

const contentStyle = (image) => {
  return {
    height: "750px",
    width: "100%",
    color: "#fff",
    //lineHeight: "160px",
    textAlign: "center",
    backgroundImage: `url(${image})`,
    backgroundSize: "100% 100% ",
    paddingTop: "12px",
    backgroundRepeat: "no-repeat",
  };
};

const aboutUs = {
  width: "maxContent",
  backgroundColor: "red",
  border: "1px solid red",
  borderRadius: "5px",
  fontWeight: "bold",
  height: "40px",
};

const becomeAVendor = {
  backgroundColor: "#000000",
  width: "maxContent",
  border: "1px solid #000000",
  borderRadius: "5px",
  fontWeight: "bold",
  height: "40px",
  marginLeft: "10px",
};

const signup = {
  width: "maxContent",
  backgroundColor: "red",
  border: "1px solid red",
  borderRadius: "5px",
  fontWeight: "bold",
  height: "40px",
  marginLeft: "10px",
};
const login = {
  backgroundColor: "#000000",
  width: "maxContent",
  border: "1px solid #000000",
  borderRadius: "5px",
  fontWeight: "bold",
  height: "40px",
  marginLeft: "10px",
};

const Header = () => {
  return (
    <div>
      <Carousel effect="fade" autoplay dots={false}>
        <div>
          <div style={contentStyle(Image)}>
            <Row>
              <Col lg={8} md={12}>
                <img
                  src={Logo}
                  style={{ height: "50px", marginLeft: "20px" }}
                />
              </Col>
              <Col lg={6} md={0}></Col>
              <Col lg={10} md={12}>
                <Button type="primary" style={aboutUs}>
                  ABOUT US
                </Button>
                <Button type="primary" style={becomeAVendor}>
                  BECOME A VENDOR
                </Button>
                <Button type="primary" style={signup}>
                  SIGNUP
                </Button>
                <Button type="primary" style={login}>
                  LOGIN
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: "230px", fontSize: "25px" }}>
              <Col sm={24} md={24} lg={24}>
                <h1 style={{ color: "white", fontWeight: "900" }}>
                  DISRUPTING BARRIERS
                </h1>
              </Col>
            </Row>
            <Row>
              <Col sm={24} md={24} lg={24}>
                <h2 style={{ color: "white" }}>
                  Goblaq brings a new approach to help minority-owned luxury
                  brands connect with their customers.
                </h2>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col sm={24} md={24} lg={24}>
                <Button type="primary" style={aboutUs}>
                  SHOP
                </Button>
                <Button type="primary" style={becomeAVendor}>
                  BECOME A VENDOR
                </Button>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <div style={contentStyle(Image2)}>
            <Row>
              <Col lg={8} md={12}>
                <img src={Logo} style={{ height: "50px" }} />
              </Col>
              <Col lg={6} md={0}></Col>
              <Col lg={10} md={12}>
                <Button type="primary" style={aboutUs}>
                  ABOUT US
                </Button>
                <Button type="primary" style={becomeAVendor}>
                  BECOME A VENDOR
                </Button>
                <Button type="primary" style={signup}>
                  SIGNUP
                </Button>
                <Button type="primary" style={login}>
                  LOGIN
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: "230px", fontSize: "25px" }}>
              <Col sm={24} md={24} lg={24}>
                <h1 style={{ color: "white", fontWeight: "900" }}>
                  DISRUPTING BARRIERS
                </h1>
              </Col>
            </Row>
            <Row>
              <Col sm={24} md={24} lg={24}>
                <h2 style={{ color: "white" }}>
                  Goblaq brings a new approach to help minority-owned luxury
                  brands connect with their customers.
                </h2>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col sm={24} md={24} lg={24}>
                <Button type="primary" style={aboutUs}>
                  SHOP
                </Button>
                <Button type="primary" style={becomeAVendor}>
                  BECOME A VENDOR
                </Button>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <div style={contentStyle(Image3)}>
            <Row>
              <Col lg={8} md={12}>
                <img src={Logo} style={{ height: "50px" }} />
              </Col>
              <Col lg={6} md={0}></Col>
              <Col lg={10} md={12}>
                <Button type="primary" style={aboutUs}>
                  ABOUT US
                </Button>
                <Button type="primary" style={becomeAVendor}>
                  BECOME A VENDOR
                </Button>
                <Button type="primary" style={signup}>
                  SIGNUP
                </Button>
                <Button type="primary" style={login}>
                  LOGIN
                </Button>
              </Col>
            </Row>
            <Row style={{ marginTop: "230px", fontSize: "25px" }}>
              <Col sm={24} md={24} lg={24}>
                <h1 style={{ color: "white", fontWeight: "900" }}>
                  DISRUPTING BARRIERS
                </h1>
              </Col>
            </Row>
            <Row>
              <Col sm={24} md={24} lg={24}>
                <h2 style={{ color: "white" }}>
                  Goblaq brings a new approach to help minority-owned luxury
                  brands connect with their customers.
                </h2>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col sm={24} md={24} lg={24}>
                <Button type="primary" style={aboutUs}>
                  SHOP
                </Button>
                <Button type="primary" style={becomeAVendor}>
                  BECOME A VENDOR
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
