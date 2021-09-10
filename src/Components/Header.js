import React from "react";
import { Button, Carousel } from "antd";
import Image from "../Assets/goblaq_black.jpg";
import Image2 from "../Assets/goblaq_latina.jpg";
import Image3 from "../Assets/goblaq_asian.jpg";

const contentStyle = {

    backgroundImage: `url(${Image})` ,

};
const img = {
  width: "100%",
};

const Header = () => {
  return (
    <div>
      <Carousel effect="fade">
        {/* <div className="slider">
hello ewjkjkldjasdkjasdj

      </div> */}
        <div className="general-bg" style={{ backgroundImage: `url(${Image})` }}>
          <h3>2</h3>
        </div>
        <div className="general-bg" style={{ backgroundImage: `url(${Image2})` }}>
        <h3>3</h3>

        </div>
        <div className="general-bg" style={{ backgroundImage: `url(${Image3})` }}>
        <h3>4</h3>

        </div>
      </Carousel>
    </div>
  );
};

export default Header;
