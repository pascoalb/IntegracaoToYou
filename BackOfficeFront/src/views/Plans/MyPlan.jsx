import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody } from 'reactstrap'
import Plan from './Plan';

class MyPlan extends Component {
  render() {
    return (
      <div className="animated fadeIn">
          <Card>
            <CardHeader>
              <strong><i className="icon-info pr-1"></i> MEU PLANO</strong>
            </CardHeader>
            <CardBody>
              <Plan icon="icon-chart" color="info" header="FREE" value="100" active>Plano 1</Plan>
            </CardBody>
          </Card>
      </div>
    );
  }
}

const select = (state) => ({
  user: state.reducers.user
});

export default connect(select)(MyPlan);

