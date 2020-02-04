import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Card, CardBody, CardHeader, Row, Table, Badge } from 'reactstrap'

class Payments extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <strong><i className="fa fa-align-justify"></i> Pagamentos</strong>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                    <tr>
                      <th>Plano</th>
                      <th>Data</th>
                      <th>Valor</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>START</td>
                      <td>2012/01/01</td>
                      <td>50</td>
                      <td>
                        <Badge color="success">EFETUADO</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>START</td>
                      <td>2012/02/01</td>
                      <td>50</td>
                      <td>
                        <Badge color="danger">CANCELADO</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>START</td>
                      <td>2012/03/01</td>
                      <td>50</td>
                      <td>
                        <Badge color="warning">PENDENTE</Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>START</td>
                      <td>2012/01/21</td>
                      <td>50</td>
                      <td>
                        <Badge color="success">EFETUADO</Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(Payments);

