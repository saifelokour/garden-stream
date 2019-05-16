//@flow
import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

import Canvas from '../canvas';
import Editor from '../editor';


const App = () => (
  <Container fluid>
    <Row>
      <Col><Canvas /></Col>
      <Col style={{height: "100vh"}}><Editor /></Col>
    </Row>
  </Container>
)

export default App
