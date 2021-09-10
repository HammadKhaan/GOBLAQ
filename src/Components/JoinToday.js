import { Button, Col, Row } from 'antd';
import React from 'react'


const button1 ={ 
    backgroundColor: "Red",
    width: "100px",
    border: "1px solid red",
    borderRadius: "5px",
    fontWeight:"bold",
    height: "40px",
    


}

const button2 ={ 
    backgroundColor: "#000000",
    width: "180px",
    border: "1px solid #000000",
    borderRadius: "5px",
    fontWeight:"bold",
    height: "40px",
    marginLeft:"10px"


}

const JoinToday = () => {
    return (
        <center style={{paddingTop:"90px"}}>
        <div>
    
            <Row>
                <Col xs={24} md={24} lg={24}>
                <h1 style={{fontSize:"35px", fontWeight:"700"}}>Join Today</h1>
                </Col>
            </Row>
            <Row >
                <Col xs={24} md={24} lg={24}>
                <Button type="primary" style={button1}>SHOP</Button>
                <Button type="primary" style={button2}>CREATE ACCOUNT</Button>

                </Col>
            </Row>
        </div>
        </center>
    )
}

export default JoinToday;
