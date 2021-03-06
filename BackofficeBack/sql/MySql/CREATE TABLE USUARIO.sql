USE `BACKOFFICE`;
 
CREATE TABLE USUARIO (
    ID INT AUTO_INCREMENT NOT NULL,
    ID_INDICACAO INT NOT NULL,
    NOME_COMPLETO VARCHAR(100) NOT NULL,
    EMAIL VARCHAR(100) NOT NULL,
    TELEFONE VARCHAR(15) NULL,
    CELULAR VARCHAR(15) NULL,
    DATA_NASCIMENTO DATE NOT NULL,
    CPF VARCHAR(20) NOT NULL,
    RG VARCHAR(20) NULL,
    ORGAO_EMISSOR_RG VARCHAR(10) NULL,
    SEXO CHAR(1) NULL,
    ESTADO_CIVIL VARCHAR(10) NULL,
    NOME_MAE VARCHAR(100) NULL,
    LOGIN VARCHAR(100) NOT NULL,
    SENHA VARCHAR(255) NOT NULL,
    SENHA_FINANCEIRA VARCHAR(255) NOT NULL,
    ID_PLANO INT,
    CONSTRAINT PK_USUARIO PRIMARY KEY (`ID` ASC)
);