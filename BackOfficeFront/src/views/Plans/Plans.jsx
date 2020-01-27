import React, { Component } from 'react';
import { Col, Row } from 'reactstrap'
import Plan from './Plan';

class Plans extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col style={{cursor: 'pointer'}} sm="12" md="4">
                        <Plan icon="icon-chart" color="info" header="Plano 1" value="30" active>Iniciante</Plan>
                    </Col>
                    <Col style={{cursor: 'pointer'}} sm="12" md="4">
                        <Plan icon="icon-chart" color="success" header="Plano 2" value="0">Pleno</Plan>
                    </Col>
                    <Col style={{cursor: 'pointer'}} sm="12" md="4">
                        <Plan icon="icon-chart" color="warning" header="Plano 3" value="0">Sênior</Plan>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Plans;
