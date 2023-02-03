const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

require("dotenv-safe").config();

const { createTables } = require("./config/table");
const { createProcedures } = require("./config/procedures");
//createTables();
createProcedures();

const userRoutes = require("./routes/Routes"); // importa as rotas do arquivo UserRoutes

app.use("/user", userRoutes); // utiliza as rotas importadas com o prefixo '/user'

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

module.exports = app;
