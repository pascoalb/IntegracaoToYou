import React, { Component } from 'react';
import { Col, Row } from 'reactstrap'
import CadLink from './CadLink';

class Social extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col style={{cursor: 'pointer'}} sm="12" md="4">
                        <CadLink icon="icon-chart" color="info" header="Plano 1" value="30" active>Iniciante</CadLink>
                    </Col>
                    {/* <Col style={{cursor: 'pointer'}} sm="12" md="4">
                        <CadLink icon="icon-chart" color="success" header="Plano 2" value="0">Pleno</CadLink>
                    </Col>
                    <Col style={{cursor: 'pointer'}} sm="12" md="4">
                        <CadLink icon="icon-chart" color="warning" header="Plano 3" value="0">Sênior</CadLink>
                    </Col> */}
                </Row>
            </div>
        );
    }
}

export default Social;
