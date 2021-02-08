import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Row, Col
} from 'reactstrap';

const Example = (props) => {
  return (
    <Row style={{padding: "6% 5%"}}>
        <Col style={{margin: "8% 0%"}}>
            <h1>Welcome to the Recharge Portal to make your life easier!</h1>
            <br/><br/>
            <Button outline color="warning" href="./Signup">Get Started</Button>{' '}
            <Button outline color="warning" href="./Login">Signin Here</Button>{' '}
        </Col>
        <Col>
          <img src="./world.png" />
        </Col>
    </Row>
  );
};

export default Example;