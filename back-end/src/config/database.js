const { Pool } = require("pg");

const createNewClient = () => {
  const connectionString = process.env.DATABASE_URL;
  return new Pool({
    connectionString: connectionString,
    ssl: true,
  });
};

const pgClient = createNewClient();

module.exports = pgClient;
