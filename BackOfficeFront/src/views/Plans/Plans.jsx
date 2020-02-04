import React, { Component } from 'react';
import { Col, Row } from 'reactstrap'
import Plan from './Plan';

class Plans extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col style={{cursor: 'pointer'}} sm="12" md="3">
                        <Plan icon="icon-chart" color="info" header="FREE" value="100" active>Plano 1</Plan>
                    </Col>
                    <Col style={{cursor: 'pointer'}} sm="12" md="3">
                        <Plan icon="icon-chart" color="success" header="START" value="0">Plano 2</Plan>
                    </Col>
                    <Col style={{cursor: 'pointer'}} sm="12" md="3">
                        <Plan icon="icon-chart" color="warning" header="PREMIUM" value="0">Plano 3</Plan>
                    </Col>
                    <Col style={{cursor: 'pointer'}} sm="12" md="3">
                        <Plan icon="icon-chart" color="warning" header="TOP" value="0">Plano 4</Plan>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Plans;
