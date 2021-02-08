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
            <CardTitle tag="h5">Don't Have an Account? Register Here</CardTitle>
            <br/>
            <Form >
          <Row form>
            <Col md={6}>
              <FormGroup style={{textAlign:"left"}}>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Enter the Email" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style={{textAlign:"left"}}>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Enter the Password" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup style={{textAlign:"left"}}>
            <Label for="exampleAddress">Address</Label>
            <Input type="text" name="address" id="exampleAddress" placeholder="Enter the Address"/>
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup style={{textAlign:"left"}}>
                <Label for="exampleCity">City</Label>
                <Input type="text" name="city" id="exampleCity"/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup style={{textAlign:"left"}}>
                <Label for="exampleState">State</Label>
                <Input type="text" name="state" id="exampleState"/>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup style={{textAlign:"left"}}>
                <Label for="exampleZip">Zip</Label>
                <Input type="text" name="zip" id="exampleZip"/>
              </FormGroup>  
            </Col>
          </Row>
          <br/>
          <Button outline color="primary">Sign Up</Button>
        </Form>
        </Card>
        </Col>
    </Row>
  );
};

export default Example;
