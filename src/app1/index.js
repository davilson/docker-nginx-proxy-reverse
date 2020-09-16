const express = require('express');
const app = express();
const PORT = 3001;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Aplicativo node 1');
})

app.listen(PORT, HOST, () => {
  console.log(`Aplicação rodando em http://${HOST}:${PORT}`);
})
