import React, { Component } from 'react';
import { Col, Row } from 'reactstrap'
import CadLink from './CadLink';
import MyPlan from '../Plans/MyPlan';
import Hierarchy from '../Plans/Hierarchy';

class Social extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col style={{ cursor: 'pointer' }} sm="12" md="4">
            <CadLink />
          </Col>
          <Col style={{ cursor: 'pointer' }} sm="12" md="4">
            <MyPlan /> 
          </Col>
          <Col style={{ cursor: 'pointer' }} sm="12" md="4">
            <Hierarchy />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Social;
