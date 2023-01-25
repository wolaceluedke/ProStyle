const pgClient = require("./database");

const createTables = async () => {
  await pgClient.connect();

  try {
    // Verifica se a tabela Usuarios_T já existe
    const res = await pgClient.query(
      `SELECT * FROM pg_tables WHERE tablename = 'usuarios_t'`
    );
    if (res.rowCount === 0) {
      await pgClient.query(
        `CREATE TABLE Usuarios_T ( usu_Codigo_IN SERIAL PRIMARY KEY, usu_Nome_VC VARCHAR(254) NOT NULL, usu_Email_VC VARCHAR(1024) NOT NULL, usu_Senha_VC VARCHAR(30) NOT NULL );`
      );
      console.log("Tabela Usuarios_T criada com sucesso");
    } else {
      console.log("Tabela Usuarios_T já existe");
    }
  } catch (err) {
    console.log("Erro ao criar tabela Usuarios_T", err);
  }

  try {
    // Verifica se a tabela Produtos_T já existe
    const res = await pgClient.query(
      `SELECT * FROM pg_tables WHERE tablename = 'produtos_t'`
    );
    if (res.rowCount === 0) {
      await pgClient.query(
        `CREATE TABLE Produtos_T ( pro_Codigo_IN SERIAL PRIMARY KEY, pro_Nome_VC VARCHAR(254) NOT NULL, pro_Descricao_VC VARCHAR(1024) NOT NULL, pro_CaminhoImg_VC VARCHAR(1024) NOT NULL, pro_Preco_DECIMAL DECIMAL(10, 2) NOT NULL );`
      );
      console.log("Tabela Produtos_T criada com sucesso");
    } else {
      console.log("Tabela Produtos_T já existe");
    }
  } catch (err) {
    console.log("Erro ao criar tabela Produtos_T", err);
  }
  try {
    // Verifica se a tabela Carrinho_T já existe
    const res = await pgClient.query(`
            SELECT * FROM pg_tables WHERE tablename = 'carrinho_t'`);
    if (res.rowCount === 0) {
      await pgClient.query(
        `CREATE TABLE Carrinho_T ( car_Codigo_IN SERIAL PRIMARY KEY, 
          car_CodUsuario_IN INT NOT NULL, 
          car_CodProduto_IN INT NOT NULL, 
          car_pro_Nome_VC VARCHAR(254) NOT NULL, 
          car_pro_Descricao_VC VARCHAR(1024) NOT NULL, 
          car_pro_CaminhoImg_VC VARCHAR(1024) NOT NULL, 
          car_pro_Preco_DECIMAL DECIMAL(10, 2) NOT NULL );`
      );
      console.log("Tabela Carrinho_T criada com sucesso");
    } else {
      console.log("Tabela Carrinho_T já existe");
    }
  } catch (err) {
    console.log("Erro ao criar tabela Carrinho_T", err);
  }

  await pgClient.end();
};

module.exports = { createTables };
