import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap'

class NetworkList extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i> MEU PLANO</strong>
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const select = (state) => ({
  user: state.reducers.user
});

export default connect(select)(NetworkList);

