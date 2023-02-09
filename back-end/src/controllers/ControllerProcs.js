const express = require("express");
const router = express.Router();
const pgClient = require("../config/database");
const { createProcedures } = require("../config/procedures");

const login = (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;
  const jwt = require('jsonwebtoken');

//   pgClient.query(
//     "SELECT usp_SelectLoginUsuario($1, $2)",
//     [email, senha],
//     (err, result) => {
//       if (err) {
//         res.status(400).send(err);
//       } else {
//         if (result.rows[0].usp_selectloginusuario) {
//           const payload = {
//             email: email
//           };
//           const options = {
//             expiresIn: '1d'
//           };
//           const secret = process.env.JWT_SECRET;
//           const token = jwt.sign(payload, secret, options);
//           console.log(token); // adicione essa linha para verificar o valor do token
//           res.status(200).json({
//             message: 'Login realizado com sucesso!',
//             token: token
//           });
//         } else {
//           res.status(401).send("E-mail ou senha incorretos.");
//         }
//       }
//     }
//   );
// };

  pgClient.query(
    "SELECT usp_SelectLoginUsuario($1, $2)",
    [email, senha],
    (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        if (result.rows[0].usp_selectloginusuario) {
          res.status(200).send("Login realizado com sucesso!");
        } else {
          res.status(401).send("E-mail ou senha incorretos.");
        }
      }
    }
  );
};

const cadastro = (req, res) => {
  const email = req.body.email;
  const senha = req.body.senha;
  const nome = req.body.nome;

  pgClient.query(
    "CALL usp_CadastroLoginUsuario($1, $2, $3)",
    [email, senha, nome],
    (err, result) => {
      if (err) {
        res.status(400).send(err + "ERRO");
      } else {
        res.status(200).send("Cadastro realizado com sucesso!");
      }
    }
  );
};

const addCarrinho = (req, res) => {
  const codUsuario = req.body.codUsuario;
  const codProduto = req.body.codProduto;

  pgClient.query(
    "CALL usp_AddCarrinho($1, $2)",
    [codUsuario, codProduto],
    (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result.rows);
      }
    }
  );
};

/*const addCarrinho = (req, res) => {
  const codUsuario = req.body.codUsuario;
  const codProduto = req.body.codProduto;
  pgClient.query(
    "CALL usp_AddCarrinho($1, $2)",
    [codUsuario, codProduto],
    (err, result) => {
      if (err) {
        res.status(400).send({ error: "Erro ao adicionar item ao carrinho" });
      } else {
        res.status(200).send({ message: "Item adicionado ao carrinho com sucesso" });
      }
    }
  );
}*/



const selectCarrinho = (req, res) => {
  const codUsuario = req.query.codUsuario;

  pgClient.query("CALL usp_SELECTCarrinho($1)", [codUsuario], (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      const carrinho = result.rows.map((item) => {
        return {
          id: item.car_codigo_in,
          nome: item.car_nome_vc,
          descricao: item.car_descricao_vc,
          caminhoImg: item.car_caminhoimg_vc,
          valor: item.car_valor_mn,
        };
      });
      res.status(200).json({ carrinho });
    }
  });
};

const addProduto = (req, res) => {
  const nome = req.body.nome;
  const descricao = req.body.descricao;
  const caminhoImg = req.body.caminhoImg;
  const valor = req.body.valor;

  pgClient.query(
    "CALL usp_AddProduto($1, $2, $3, $4)",
    [nome, descricao, caminhoImg, valor],
    (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send("Produto adicionado com sucesso!");
      }
    }
  );
};

module.exports = {
  login,
  cadastro,
  addCarrinho,
  selectCarrinho,
  addProduto,
};
