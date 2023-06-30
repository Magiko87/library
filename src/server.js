const express = require('express');
const cors = require('cors');

const app = express();

// Abilita il middleware CORS
app.use(cors());

// Definisci le tue route e altre configurazioni
// ...

// Avvia il server
app.listen(3000, () => {
  console.log('Server avviato sulla porta 3000');
});
