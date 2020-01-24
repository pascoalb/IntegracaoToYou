import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Row } from 'reactstrap';
import { Button, Col, Form, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

class UserData extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i> Dados Cadastrais</strong>
              </CardHeader>
              <CardBody>
                <Form>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        Indicação
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Username" autoComplete="username" disabled defaultValue={this.props.match.params.id} />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Nome Completo" autoComplete="Nome Completo" />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Email" autoComplete="email" />
                  </InputGroup>

                  <Row style={{ marginBottom: '15px' }}>
                    <InputGroup className="col-md-6">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Telefone" autoComplete="telefone" />
                    </InputGroup>
                    <InputGroup className="col-md-6">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-screen-smartphone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Celular" autoComplete="celular" />
                    </InputGroup>
                  </Row>

                  <Row style={{ marginBottom: '15px' }}>
                    <InputGroup className="col-md-6">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-calendar"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="date" placeholder="Data Nascimento" autoComplete="Data Nascimento" />
                    </InputGroup>
                    <InputGroup className="col-md-6">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-people"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Sexo" autoComplete="Sexo" />
                    </InputGroup>
                  </Row>

                  <Row style={{ marginBottom: '15px' }}>
                    <InputGroup className="col-md-6">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-doc"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="RG" autoComplete="RG" />
                    </InputGroup>
                    <InputGroup className="col-md-6">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-note"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Orgão Emissor" autoComplete="Orgão Emissor" />
                    </InputGroup>
                  </Row>

                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-options"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Estado Civil" autoComplete="Estado Civil" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user-female"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Nome da Mãe" autoComplete="Nome da Mãe" />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="password" placeholder="Senha" autoComplete="new-password" />
                  </InputGroup>
                  <InputGroup className="mb-4">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="password" placeholder="Repetir Senha" autoComplete="new-password" />
                  </InputGroup>
                  <Button color="success" block>Criar Conta</Button>
                </Form>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default UserData;
