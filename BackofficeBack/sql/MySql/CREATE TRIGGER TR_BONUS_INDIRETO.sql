DELIMITER $ 

CREATE TRIGGER TR_BONUS_INDICACAO_INDIRETA AFTER INSERT ON USUARIO
FOR EACH ROW
FOLLOWS TR_BONUS_INDICACAO
BEGIN

DECLARE v_GERACAO INT DEFAULT 2;
DECLARE v_USUARIO INT;
DECLARE v_USUARIO_PAI INT;
DECLARE v_USUARIO_AVO INT;

CREATE TEMPORARY TABLE TMP_ARVORE (
	GER_ASCENDENTE INT,
	GER_MAX_PLANO INT,
	ID_USUARIO INT,
	ID_USUARIO_PAI INT,
	FL_RECEBE_BONUS CHAR(1)
);

SET v_USUARIO_PAI = NEW.ID_INDICACAO;
SELECT ID_INDICACAO INTO v_USUARIO_AVO FROM USUARIO WHERE v_USUARIO_PAI = ID;

WHILE v_GERACAO <= 5
DO
	INSERT INTO TMP_ARVORE (GER_ASCENDENTE, GER_MAX_PLANO, ID_USUARIO, ID_USUARIO_PAI, FL_RECEBE_BONUS)
	SELECT v_GERACAO, PL.NIVEL_IND_INDIRETA, USU.ID, USU.ID_INDICACAO, CASE WHEN PL.NIVEL_IND_INDIRETA >= v_GERACAO THEN 1 ELSE 0 END
	FROM USUARIO USU
	INNER JOIN PLANOS PL ON PL.ID_PLANO = USU.ID_PLANO
	WHERE v_USUARIO_AVO = USU.ID;
		
	SELECT ID_INDICACAO INTO v_USUARIO_AVO FROM USUARIO WHERE v_USUARIO_AVO = ID ;
		
	SET v_GERACAO = v_GERACAO + 1;
END WHILE;

INSERT INTO BONUS_IND_INDIRETA (ID_USUARIO_BONUS, VALOR_BONUS, ID_USUARIO_GERADOR, FL_PGTO_CONFIRMADO)
SELECT ID_USUARIO, 5.00, NEW.ID, NULL 
FROM TMP_ARVORE 
WHERE IFNULL(FL_RECEBE_BONUS, 0) = 1;

END;
DROP TABLE TMP_ARVORE;
$
DELIMITER ;

-- DROP TRIGGER TR_BONUS_INDICACAO_INDIRETA

