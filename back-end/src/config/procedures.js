const pgClient = require("./database");

const createProcedureLoginUsuario = `
CREATE OR REPLACE  FUNCTION usp_SelectLoginUsuario (p__PAR_Email_VC VARCHAR(1024), p__PAR_Senha_VC VARCHAR(30))
RETURNS BOOLEAN
AS $$
BEGIN
    RETURN EXISTS (SELECT 1 FROM Usuarios_T WHERE usu_Email_VC = p__PAR_Email_VC AND usu_Senha_VC = p__PAR_Senha_VC);
END;
$$ LANGUAGE plpgsql;

`;
const createProcedureCadastroUsuario = `
CREATE OR REPLACE  PROCEDURE usp_CadastroLoginUsuario (	p__PAR_Email_VC			VARCHAR(1024)	,
						                                p__PAR_Senha_VC			VARCHAR(30)	,
						                                p__PAR_Nome_VC			VARCHAR(254))

AS $$ 
	DECLARE     v__CALC_Email_VC			VARCHAR(1024)	= p__PAR_Email_VC	;	
		          v__CALC_Senha_VC			VARCHAR(30)	    = p__PAR_Senha_VC	;	
		          v__CALC_Nome_VC			    VARCHAR(254) 	= p__PAR_Nome_VC;
BEGIN	

	INSERT INTO Usuarios_T	(usu_Email_VC, usu_Nome_VC, usu_Senha_VC)
					VALUES	(v__CALC_Email_VC, v__CALC_Nome_VC, v__CALC_Senha_VC);
END;
$$ LANGUAGE plpgsql;
`;

const createProcedureAddCarrinho = `
CREATE OR REPLACE PROCEDURE usp_AddCarrinho (
  p__PAR_CodUsuario_IN INT,
  p__PAR_CodProduto_IN INT
)
AS $$
DECLARE 
  v__CALC_CodUsuario_IN INT = p__PAR_CodUsuario_IN;
  v__CALC_CodProduto_IN INT = p__PAR_CodProduto_IN;
  v__CALC_pro_Nome_VC VARCHAR(254);
  v__CALC_pro_Descricao_VC VARCHAR(1024);
  v__CALC_pro_CaminhoImg_VC VARCHAR(1024);
  v__CALC_pro_Preco_DECIMAL DECIMAL(10, 2);
BEGIN
  SELECT pro_Nome_VC, pro_Descricao, pro_CaminhoImg_VC, pro_Preco_DECIMAL
  INTO v__CALC_pro_Nome_VC, v__CALC_pro_Descricao_VC, v__CALC_pro_CaminhoImg_VC, v__CALC_pro_Preco_DECIMAL
  FROM Produtos_T
  WHERE pro_Codigo_IN = v__CALC_CodProduto_IN;
  INSERT INTO Carrinho_T (
  	car_CodUsuario_IN, 
  	car_CodProduto_IN, 
  	car_pro_Nome_VC, 
  	car_pro_Descricao_VC, 
  	car_pro_CaminhoImg_VC, 
  	pro_valor_decimal
   )
  VALUES (
  v__CALC_CodUsuario_IN,
  v__CALC_CodProduto_IN,
  v__CALC_pro_Nome_VC,
  v__CALC_pro_Descricao_VC,
  v__CALC_pro_CaminhoImg_VC,
  v__CALC_pro_Preco_DECIMAL
  ); 
END;
$$ LANGUAGE plpgsql;
`;

const createProcedureSELECTCarrinho = `
CREATE OR REPLACE  PROCEDURE usp_SELECTCarrinho (	p__PAR_CodUsuaruio_IN	INT, cur REFCURSOR	)								    					
AS $$ 
	DECLARE   v__CALC_CodUsuaruio_IN	 INT	 =	    p__PAR_CodUsuaruio_IN;
BEGIN

	OPEN cur FOR SELECT * FROM Carrinho_T WHERE car_CodUsuaruio_IN = v__CALC_CodUsuaruio_IN;
END;
$$ LANGUAGE plpgsql; 
    `;

const createProceureAddProduto = `
CREATE OR REPLACE  PROCEDURE usp_AddProduto (	p__PAR_Nome_VC		    VARCHAR(254)	,		
                                                p__PAR_Descricao_VC	    VARCHAR(1024)	,
                                                p__PAR_CaminhoImg_VC	VARCHAR(1024)	,
                                                p__PAR_Valor_MN		    MONEY		)
                                   
AS $$ 
DECLARE     v__CALC_pro_Nome_VC			    VARCHAR(254)		= p__PAR_Nome_VC		;
            v__CALC_pro_Descricao_VC		VARCHAR(1024)		= p__PAR_Descricao_VC	;
            v__CALC_pro_CaminhoImg_VC		VARCHAR(1024)		= p__PAR_CaminhoImg_VC	;
            v__CALC_pro_Valor_MN			MONEY			    = p__PAR_Valor_MN;
BEGIN		


INSERT INTO Produtos_T	( 	pro_Nome_VC			    ,
                            pro_Descricao_VC	 	,
                            pro_CaminhoImg_VC	 	,
                            pro_Valor_MN		 	)

VALUES		(   v__CALC_pro_Nome_VC	      	,
                v__CALC_pro_Descricao_VC	,
                v__CALC_pro_CaminhoImg_VC	,
                v__CALC_pro_Valor_MN		);
END;
$$ LANGUAGE plpgsql;
    `;

const createProcedures = async () => {
  pgClient.query(createProcedureLoginUsuario, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        "Stored procedure usp_SelectLoginUsuario created successfully"
      );
    }
  });

  pgClient.query(createProcedureCadastroUsuario, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Stored procedure usp_CadastroUsuario created successfully");
    }
  });

  pgClient.query(createProcedureAddCarrinho, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Stored procedure usp_AddCarrinho created successfully");
    }
  });

  pgClient.query(createProcedureSELECTCarrinho, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Stored procedure usp_SELECTCarrinho created successfully");
    }
  });

  pgClient.query(createProceureAddProduto, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Stored procedure usp_AddProduto created successfully");
    }
  });
};

module.exports = { createProcedures };
