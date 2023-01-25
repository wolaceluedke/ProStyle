import { useEffect } from "react";
import sql from "mssql";

const config = {
  server: "localhost",
  database: "ProStyle",
  options: {
    encrypt: true,
    trustedConnection: true,
  },
};

function DatabaseConnection() {
  useEffect(() => {
    sql
      .connect(config)
      .then(() => {
        console.log("Conexão estabelecida com o banco de dados.");
      })
      .catch((err) => {
        console.log("Erro ao estabelecer conexão com o banco de dados: ", err);
      });
  }, []);

  return null;
}

export default DatabaseConnection;
