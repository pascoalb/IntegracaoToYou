import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { AppNavbarBrand } from '@coreui/react';
import logo from '../../../assets/img/brand/logo.png'

class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Entre na sua conta</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Usuário" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Senha" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="warning" className="px-4" onClick={() => window.location.hash = '/dashboard'}>Entrar</Button>
                        </Col>
                        {/* <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col> */}
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-warning py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Não possui conta?</h2>
                      <p>Entre em contato com algum de nossos parceiros e faça parte de um time de sucesso!</p>
                      <Link to="/register/user">
                        <Button color="dark" className="mt-3" active tabIndex={-1}>Cadastrar!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
                  <CardFooter style={{ backgroundColor: '#575a5d' }}>
                  <div className='text-center'>
                    <Col xs="12" md="12">
                      <AppNavbarBrand color="dark"
                        full={{ src: logo, width: 255, height: 40, alt: 'ToYou Logo' }}
                      />
                    </Col>
                  </div>
                </CardFooter>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
