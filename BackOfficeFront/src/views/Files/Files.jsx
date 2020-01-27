import React, { Component } from 'react';
import { Col, Row } from 'reactstrap'
import File from './File';

class Files extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6" lg="3">
                        <File header="Treinamento 1" mainText="1" icon="fa fa-cogs" color="primary" />
                    </Col>
                    <Col xs="12" sm="6" lg="3">
                        <File header="Treinamento 2" mainText="2" icon="fa fa-laptop" color="info" />
                    </Col>
                    <Col xs="12" sm="6" lg="3">
                        <File header="Treinamento 3" mainText="3" icon="fa fa-moon-o" color="warning" />
                    </Col>
                    <Col xs="12" sm="6" lg="3">
                        <File header="Treinamento 4" mainText="4" icon="fa fa-bell" color="danger" />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Files;
