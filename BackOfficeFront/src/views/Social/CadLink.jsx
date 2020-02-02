import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardBody,  InputGroup, InputGroupAddon, Input, InputGroupText, Button, Row, Col } from 'reactstrap';
import { URL_REGISTER } from '../../util';

class CadLink extends Component {

  copyLink(e) {
    e.preventDefault();
    navigator.clipboard.writeText(this.refs.textlink.props.defaultValue);
  }

  render() {
    const {data} = this.props.user
    return (
      <Card className="card-accent-warning">
        <CardHeader>
          <strong>LINK DE INDICAÇÃO</strong>
        </CardHeader>
        <CardBody>
          <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="icon-link"></i>
              </InputGroupText>
            </InputGroupAddon>
            <Input type="text" ref='textlink' defaultValue={URL_REGISTER + data.login} />
          </InputGroup>
          <Row className="align-items-center">
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="primary" onClick={(e) => this.copyLink(e)}><i className="fa fa-copy" ></i> Copiar</Button>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <a id="compartilharwhatslinkdeindicacao" type='button' target="_blank" rel="noopener noreferrer" className="btn btn-success btn-quirk btn-block" href={"https://api.whatsapp.com/send?text=Clique%20aqui%20para%20se%20cadastrar: " + URL_REGISTER + data.login}><i className="fa fa-whatsapp"></i>&nbsp;Whatsapp</a>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <a style={{ color: 'white' }} id="compartilharwhatslinkdeindicacao2" type='button' target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-quirk btn-block" href={URL_REGISTER + data.login}><i className="fa fa-external-link"></i>&nbsp;Abrir</a>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

const select = (state) => ({
  user: state.reducers.user
});

export default connect(select)(CadLink);
