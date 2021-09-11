import React from "react";
import { Carousel } from "antd";
import Image from "../Assets/goblaq_dialpad.png";
import Image2 from "../Assets/goblaq_stripe.png";
import Image3 from "../Assets/goblaq_twilio.png";
import Image4 from "../Assets/goblaq_segment.png";
import Image5 from "../Assets/goblaq_aws.png";
import Image6 from "../Assets/goblaq_autho.png";

const contentStyle = {
  paddingLeft: "560px",
  paddingTop: "60px",
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  //background: "#364d79",
};
const Partner1 = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <div style={contentStyle}>
            <img src={Image} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src={Image2} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src={Image3} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src={Image4} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src={Image5} />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img src={Image6} />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Partner1;
