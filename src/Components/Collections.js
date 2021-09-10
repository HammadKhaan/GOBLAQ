import { Col, Row } from "antd";
import React from "react";
import { Card } from "antd";
import { Button } from 'antd';

//import Image1 from '../Assets/'

const button ={ 
    backgroundColor: "Red",
    width: "100%",
    border: "1px solid red",
    borderRadius: "5px",
    fontWeight:"bold",

}
const browseButton ={ 
    backgroundColor: "Red",
    width: "220px",
    border: "1px solid red",
    borderRadius: "5px",
    verticalAlign:"center",
    fontWeight:"bold",

}
const { Meta } = Card;
const images = [
  {
    pic: "https://goblaq.s3.us-east-2.amazonaws.com/16297747648321163.3896030344815",
    line: "Quinta shirt in pale green tweed",
  },
  {
    pic: "https://goblaq.s3.us-east-2.amazonaws.com/16297757592618443.090926354664",
    line: "Vanity Mini Dress",
  },
  {
    pic: "https://goblaq.s3.us-east-2.amazonaws.com/16297767468967836.438096099425",
    line: "Dbs Patch Tee",
  },
  {
    pic: "https://goblaq.s3.us-east-2.amazonaws.com/16297781613491386.1083613343817",
    line: "LADY LABYRINTH 32",
  },
];

export const CustomCard = (props) => {
  console.log(props);
  return (
    <Col xs={24} md={12} lg={6}>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt="example" src={props.img} />}
      >
        Nenaji Media
        <br /> <br />
        <Meta title={props.txt} description="Price : $165" />
        <br/>
        <Button type="primary" style={button}>VIEW</Button>

      </Card>
    </Col>
  );
};

const Collections = () => {
  return (
    <div style={{paddingTop:"10px"}}>
      <center>
          <h1 style={{fontSize:"50px", fontWeight:"700"}}>Collections</h1>
        <Row>
          {images.map((image) => (
            <CustomCard img={image.pic} txt={image.line} />
          ))}
        </Row>
        <Row style={{paddingTop:"80px"}}>
        <Col xs={24} md={24} lg={24}>
        <Button type="primary" style={browseButton}>BROWSE MORE COLLECTION</Button>
        </Col>
        </Row>
      </center>
    </div>
  );
};

export default Collections;
