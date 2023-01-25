const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Verificar se as credenciais são válidas
  if (email === 'admin@example.com' && password === 'password') {
    const token = jwt.sign({ email }, 'secret_key');
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Credenciais inválidas' });
});

function verifyToken(req, res, next) {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).json({ message: 'Não autorizado' });
  }
  try {
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
}

app.get('/dashboard', verifyToken, (req, res) => {
});




















// import { useEffect } from 'react';
// import sql from 'mssql';

// const config = {
//   server: 'localhost',
//   database: 'ProStyle',
//   options: {
//     encrypt: true,
//     trustedConnection: true
//   }
// }

// function DatabaseConnection() {
//   useEffect(() => {
//     sql.connect(config)
//       .then(() => {
//         console.log('Conexão estabelecida com o banco de dados.');
//       })
//       .catch(err => {
//         console.log('Erro ao estabelecer conexão com o banco de dados: ', err);
//       });
//   }, []);

//   return null;
// }

// export default DatabaseConnection;