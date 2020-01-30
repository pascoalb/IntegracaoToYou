import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { AppNavbarBrand } from '@coreui/react';
import logo from '../../../assets/img/brand/logo.png'
import { bindActionCreators } from 'redux';
import * as ActionCreatorUser from '../../../actions/user'
import FontAwesome from 'react-fontawesome'
import Swal from 'sweetalert2'
import { maskCPF, TestaCPF } from '../../../util';

class Register extends Component {

  componentWillMount() {
    if (this.props.match.params.id)
      this.props.action.user.getUserValid(this.props.match.params.id)
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { data } = this.props.user
    const user = nextProps.user
    if (user.data !== data && this.isValidUser(user)) {
      window.location.hash = '/dashboard'
    }
  }

  isValidUser(user) {
    if (user.data.length === 0)
      return false;
    if (user.errorMessage)
      return false;
    return true;
  }

  save(e) {
    e.preventDefault()

    let user = {}
    let elements = e.target.elements

    elements.forEach(e => {
      user[e.id] = e.value
    });

    user.idIndicacao = 1234 //this.props.user.indicacaoId

    if (this.validateUser(user))
      this.props.action.user.saveUser(user)
  }

  validateUser(user) {
    debugger
    Object.keys(user).forEach(key => {
      if (user[key] === '') {
        Swal.fire({
          icon: 'warning',
          title: 'Preencha todos os campos!'
        })
        return false
      }
    });

    if(TestaCPF(user.cpf)){
      Swal.fire({
        icon: 'warning',
        title: 'CPF inválido!'
      })
      return false
    }

    if(user.senha !== user.repeatSenha){
      Swal.fire({
        icon: 'warning',
        title: 'Confirmaçõa de senha difere da senha informada!'
      })
      return false
    }

    return true
  }

  render() {
    const { user } = this.props
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={(e) => this.save(e)}>

                    <h1>Cadastro</h1>
                    <p className="text-muted">{user.isLoading ? <FontAwesome spin name="spinner" /> : 'Crie já sua conta!'}</p>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          Indicação
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id='idIndicacao' invalid={!user.isValid} disabled defaultValue={this.props.match.params.id} />
                      <div className="invalid-feedback">{user.errorMessage ? user.errorMessage : ''}</div>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id='nomeCompleto' placeholder="Nome Completo" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id='email' placeholder="Email" />
                    </InputGroup>

                    <Row style={{ marginBottom: '15px' }}>
                      <InputGroup className="col-md-6">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-phone"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id='telefone' placeholder="Telefone" />
                      </InputGroup>
                      <InputGroup className="col-md-6">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-screen-smartphone"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id='celular' placeholder="Celular" />
                      </InputGroup>
                    </Row>

                    <Row style={{ marginBottom: '15px' }}>
                      <InputGroup className="col-md-6">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-calendar"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="date" id='dataNascimento' placeholder="Data Nascimento" />
                      </InputGroup>
                      <InputGroup className="col-md-6">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-people"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id='sexo' placeholder="Sexo" />
                      </InputGroup>
                    </Row>

                    <Row style={{ marginBottom: '15px' }}>
                      <InputGroup className="col-md-6">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-doc"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id='rg' placeholder="RG" />
                      </InputGroup>
                      <InputGroup className="col-md-6">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-note"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id='orgaoEmissorRg' placeholder="Orgão Emissor" />
                      </InputGroup>
                    </Row>

                    <Row style={{ marginBottom: '15px' }}>
                    <InputGroup className="col-md-6">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-doc"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id='cpf' placeholder="CPF" onChange={(e) => e.target.value = maskCPF(e.target.value)} />
                      </InputGroup>
                      <InputGroup className="col-md-6">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-options"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" id='estadoCivil' placeholder="Estado Civil" />
                      </InputGroup>
                    </Row>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user-female"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id='nomeMae' placeholder="Nome da Mãe" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id='login' placeholder="Login" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" id='senha' placeholder="Senha" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" id='repeatSenha' placeholder="Repetir Senha" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" id='senhaFinanceira' placeholder="Senha Financeira" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" id='repeatSenhaFinanceira' placeholder="Repetir Senha Financeira" />
                    </InputGroup>
                    {/* <Button color="success" type='submit' block disabled={!user.isValid}>Criar Conta</Button> */}
                    <Button color="success" type='submit' id='submit' block value='Criar Conta' >Criar Conta</Button>
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

const select = (state) => ({
  user: state.reducers.user
});

const mapDispatchToProps = (dispatch) => ({ action: { user: bindActionCreators(ActionCreatorUser, dispatch) } });

export default connect(select, mapDispatchToProps)(Register);
