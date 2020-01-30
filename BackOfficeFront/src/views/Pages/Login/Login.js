import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { AppNavbarBrand } from '@coreui/react';
import logo from '../../../assets/img/brand/logo.png'
import { bindActionCreators } from 'redux';
import * as ActionCreatorUser from '../../../actions/user'
import FontAwesome from 'react-fontawesome'

class Login extends Component {

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { login } = this.props.user
    const user = nextProps.user
    if (user.login !== login && this.isValidUser(user)) {
      
      window.location.hash = '/dashboard'
    }
  }

  isValidUser(user) {
    if (user.login.length === 0)
      return false;
    if (user.errorMessage)
      return false;
    return true;
  }

  doLogin(e) {
    e.preventDefault()
    this.props.action.user.setLogin({ Login: e.target.elements.user.value, Senha: e.target.elements.pass.value })
  }

  render() {
    const { user } = this.props
    let isInvalid = user.errorMessage !== undefined
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={(e) => this.doLogin(e)}>
                      <h1>Login</h1>
                      <p className="text-muted">{user.isLoading ? <FontAwesome spin name="spinner" /> : 'Entre na sua conta'}</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input invalid={isInvalid} type="text" placeholder="Usuário" id='user' />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input invalid={isInvalid} type="password" placeholder="Senha" id='pass' />
                        <div className="invalid-feedback">{user.errorMessage ? user.errorMessage : ''}</div>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type='submit' color="warning" className="px-4" >Entrar</Button>
                        </Col>
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

const select = (state) => ({
  user: state.reducers.user
});

const mapDispatchToProps = (dispatch) => ({ action: { user: bindActionCreators(ActionCreatorUser, dispatch) } });

export default connect(select, mapDispatchToProps)(Login);