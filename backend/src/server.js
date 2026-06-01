import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import conectarBanco from './config/db.js';
import produtoRoutes from './routes/produtoRoutes.js';


dotenv.config();
conectarBanco();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/produtos', produtoRoutes);

app.get('/', (req, res) => {
  res.json({ mensagem: 'Servidor Node.js rodando perfeitamente!' });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});