USE `backoffice`; 

CREATE TABLE ENDERECO (
    `ID` INT AUTO_INCREMENT NOT NULL,
    `ID_USUARIO` INT NOT NULL,
    `CEP` VARCHAR(10) NOT NULL,
    `LOGRADOURO` VARCHAR(150) NOT NULL,
    `NUMERO` VARCHAR(10) NULL,
    `COMPLEMENTO` VARCHAR(100) NULL,
    `BAIRRO` VARCHAR(50) NOT NULL,
    `CIDADE` VARCHAR(50) NOT NULL,
    `ESTADO` VARCHAR(50) NOT NULL,
    `PAIS` VARCHAR(30) NOT NULL,
    CONSTRAINT `PK_ENDERECO` PRIMARY KEY (`ID` ASC)
);