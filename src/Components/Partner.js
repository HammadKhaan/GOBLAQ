import { Col, Row } from 'antd';
import React from 'react';
import Image from  "../Assets/goblaq_dialpad.png";
import Image2 from  "../Assets/goblaq_stripe.png";
import Image3 from  "../Assets/goblaq_twilio.png";
import Image4 from  "../Assets/goblaq_segment.png";
import Image5 from  "../Assets/goblaq_aws.png";
import Image6 from  "../Assets/goblaq_autho.png";




const partners = [Image,Image2,Image3,Image4,Image5,Image6];




export const CustomPartner = (props) => {
    return ( 
    <Col xs={24} md={12} lg={4}>
            <img src={props.img} style={{height:"40px",width:"120px"}}/>
    </Col>
    );
}






const Partner = () => {
    return (
        <div style={{paddingTop:"40px"}}>
            <center>
            <Row>
                <Col xs={24} md={24} lg={24}>
                <h1 style={{fontSize:"50px", fontWeight:"700"}}>Partners</h1>
                </Col>
            </Row>
            

            <Row>
            {partners.map((partner) => 
            (
            
                <CustomPartner img={partner}/>
            ))}

            </Row>
            </center>    
        </div>
    );
}

export default Partner;
