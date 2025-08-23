// 1. A configuração do dotenv DEVE ser a primeira linha
require('dotenv').config();

// 2. Importação dos pacotes
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // <<-- NOVA LINHA AQUI

// 3. Importação das suas rotas
const authRoutes = require('./src/routes/authRoutes');

// 4. Inicialização do Express
const app = express();
const PORT = 3001;

// 5. Conexão com o Banco de Dados
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado ao MongoDB!'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// 6. Configuração dos Middlewares
// A ordem aqui é importante!
app.use(cors()); // <<-- NOVA LINHA AQUI (Permite requisições de outras origens)
app.use(express.json()); // Permite que o servidor entenda o formato JSON

app.get('/', (req, res) => {
  res.send('Olá, mundo! Nosso servidor está funcionando!');
});

// 7. Uso das Rotas
app.use('/api/auth', authRoutes); // Nossas rotas de autenticação

// 8. Inicialização do Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});