import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Row, Col
} from 'reactstrap';
import {  Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Example = (props) => {
  return (
    <Row style={{padding: "6%"}}>
        <Col>
            <img src="./a1.png"/>
            <br/>
            <p style={{color:"white"}}>Hello World</p>
        </Col>
        <Col>
        <Card body outline color="primary">
            <CardTitle tag="h5">Already Have an Account? Login Here</CardTitle>
            <br/>
            <Form >
          <FormGroup style={{textAlign:"left"}}>
            <Label for="exampleAddress1">Username</Label>
            <Input type="email" name="" id="exampleAddress1" placeholder="Enter the Username"/>
          </FormGroup>
          <FormGroup style={{textAlign:"left"}}>
            <Label for="exampleAddress2">Password</Label>
            <Input type="password" name="" id="exampleAddress2" placeholder="Enter the Password"/>
          </FormGroup>
          <FormGroup check style={{textAlign:"left"}}>
            <Input type="checkbox" name="check" id="exampleCheck"/>
            <Label for="exampleCheck" check>Remember Me</Label>
          </FormGroup>
          <br/><br/>
          <Button outline color="primary">Sign In</Button>
        </Form>
        </Card>
        </Col>
    </Row>
  );
};

export default Example;