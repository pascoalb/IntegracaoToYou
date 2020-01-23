import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { AppNavbarBrand } from '@coreui/react';
import logo from '../../../assets/img/brand/logo.png'

class Register extends Component {

  render() {
    debugger
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Cadastro</h1>
                    <p className="text-muted">Crie já sua conta!</p>
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

                    <Row style={{marginBottom: '15px'}}>
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

                    <Row style={{marginBottom: '15px'}}>
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

                    <Row style={{marginBottom: '15px'}}>
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
                <CardFooter style={{ backgroundColor: '#575a5d' }}>
                  <div className='text-center'>
                    <Col xs="12" md="12">
                      <AppNavbarBrand color="dark"
                        full={{ src: logo, width: 255, height: 40, alt: 'ToYou Logo' }}
                      />
                    </Col>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
