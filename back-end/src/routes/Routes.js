// Arquivo responsal por gerenciar as rotas

const express = require("express");
const router = express.Router();
const {
  login,
  cadastro,
  addCarrinho,
  selectCarrinho,
  addProduto,
} = require("../controllers/ControllerProcs");

router.post("/login", login);
router.post("/cadastro", cadastro);
router.post("/addcarrinho", addCarrinho);
router.get("/selectcarrinho", selectCarrinho);
router.post("/addproduto", addProduto);

module.exports = router; // deixa o arquivo despinivel para ser usado
