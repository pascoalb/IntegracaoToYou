import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Card, CardBody, CardHeader, Row, CardFooter, Progress } from 'reactstrap'

class Hierarchy extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card >
              <CardHeader>
                <strong><i className="fa fa-star"></i> Carreira</strong>
              </CardHeader>
              <CardBody>
                <Row className='text-right'>
                  <Col>
                    <h1>
                      <strong><i className="fa fa-star text-warning"></i></strong>
                    </h1>
                    Agente
                  </Col>
                  <Col>
                    <h1>
                      <strong><i className="fa fa-star text-warning"></i></strong>
                    </h1>
                    Supervisor
                  </Col>
                </Row>
                <Row className='text-right'>
                  <Col>
                    <Progress animated color="warning" value="5000" max={10000}  className="mb-3">5000 de 10000</Progress>
                  </Col>
                  <Col>
                    <Progress animated color="warning" value="0" max={15000} className="mb-3">0 de 50000</Progress>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <div className='text-center'>
                  <h4 className='text-warning'>Pontuação Atual</h4>
                  <strong>5000</strong>
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(Hierarchy);

