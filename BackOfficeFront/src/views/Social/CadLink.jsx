import React, { Component } from 'react';
import { Card, CardHeader, CardBody,  InputGroup, InputGroupAddon, Input, InputGroupText, Button, Row, Col } from 'reactstrap';

class CadLink extends Component {


  copyLink(e) {
    debugger
    e.preventDefault();
    navigator.clipboard.writeText(this.refs.textlink.props.defaultValue);
  }

  render() {
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
            <Input type="text" ref='textlink' defaultValue="http://toyousocial.com/backoffice/register/meulink" />
          </InputGroup>
          <Row className="align-items-center">
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="primary" onClick={(e) => this.copyLink(e)}><i className="fa fa-copy" ></i> Copiar</Button>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <a id="compartilharwhatslinkdeindicacao" type='button' target="_blank" rel="noopener noreferrer" className="btn btn-success btn-quirk btn-block" href="https://api.whatsapp.com/send?text=Clique%20aqui%20para%20se%20cadastrar: http://toyousocial.com/backoffice/register/meulink"><i class="fa fa-whatsapp"></i>&nbsp;Whatsapp</a>
            </Col>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <a style={{ color: 'white' }} id="compartilharwhatslinkdeindicacao2" type='button' target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-quirk btn-block" href="https://api.whatsapp.com/send?text=Clique%20aqui%20para%20se%20cadastrar: http://toyousocial.com/backoffice/register/meulink"><i class="fa fa-external-link"></i>&nbsp;Abrir</a>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default CadLink;