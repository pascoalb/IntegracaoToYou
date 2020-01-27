import React, { Component } from 'react';
import { Col, Card, CardHeader, CardBody } from 'reactstrap'
import Chart from "react-google-charts";

class Network extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Col xl={12} sm={12} md={12}>
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Rede <small className="text-muted">membros</small>
                        </CardHeader>
                        <CardBody>
                            <Chart
                                width={'100%'}
                                height={350}
                                chartType="OrgChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Name', 'Manager', 'ToolTip'],
                                    [
                                        {
                                            v: 'Mike',
                                            f: 'Mike<div style="color:red; font-style:italic">President</div>',
                                        },
                                        '',
                                        'The President',
                                    ],
                                    ['Jim', 'Mike', 'VP',],
                                    ['Alice', 'Mike', ''],
                                    ['Bob', 'Jim', 'Bob Sponge'],
                                    ['Carol', 'Bob', ''],
                                    ['Carol2', 'Mike', '']
                                ]}
                                options={{
                                    allowHtml: true,
                                }}
                                rootProps={{ 'data-testid': '1' }}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </div>
        );
    }
}

export default Network;
