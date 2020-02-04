import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardHeader, Row } from 'reactstrap';
import { Col, Form, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { formatDate } from '../../util';

class UserData extends Component {
  render() {
    const { data } = this.props.user
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
                  {/* <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        Patrocinador
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Username" autoComplete="username" disabled defaultValue={this.props.match.params.id} />
                  </InputGroup> */}
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Nome Completo" autoComplete="Nome Completo" defaultValue={data.nomeCompleto} />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Email" autoComplete="email" defaultValue={data.email}/>
                  </InputGroup>

                  <Row style={{ marginBottom: '15px' }}>
                    <InputGroup className="col-md-6">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-phone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Telefone" autoComplete="telefone" defaultValue={data.telefone}/>
                    </InputGroup>
                    <InputGroup className="col-md-6">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-screen-smartphone"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Celular" autoComplete="celular" defaultValue={data.celular}/>
                    </InputGroup>
                  </Row>

                  <Row style={{ marginBottom: '15px' }}>
                    <InputGroup className="col-md-6">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-calendar"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="date" placeholder="Data Nascimento" autoComplete="Data Nascimento" defaultValue={formatDate(data.dataNascimento)}/>
                    </InputGroup>
                    <InputGroup className="col-md-6">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-people"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="select" id='sexo' placeholder="Sexo" defaultValue={data.sexo}>
                          <option>Sexo</option>
                          <option value='M'>M</option>
                          <option value='F'>F</option>
                        </Input>
                    </InputGroup>
                  </Row>

                  <Row style={{ marginBottom: '15px' }}>
                    <InputGroup className="col-md-6">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-doc"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="RG" autoComplete="RG" defaultValue={data.rg}/>
                    </InputGroup>
                    <InputGroup className="col-md-6">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-note"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Orgão Emissor" autoComplete="Orgão Emissor" defaultValue={data.orgaoEmissorRg}/>
                    </InputGroup>
                  </Row>

                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-options"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="select" id='estadoCivil' placeholder="Estado Civil" defaultValue={data.estadoCivil}>
                          <option>Estado Civil</option>
                          <option value='S'>Solteiro(a)</option>
                          <option value='C'>Casado(a)</option>
                          <option value='UE'>União Estável</option>
                          <option value='D'>Divorciado(a)</option>
                        </Input>
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user-female"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Nome da Mãe" autoComplete="Nome da Mãe" defaultValue={data.nomeMae}/>
                  </InputGroup>
                  {/* <Button color="success" block>Criar Conta</Button> */}
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const select = (state) => ({
  user: state.reducers.user
});

export default connect(select)(UserData);