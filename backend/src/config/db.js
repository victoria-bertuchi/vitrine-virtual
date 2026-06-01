import mongoose from 'mongoose';

const conectarBanco = async () => {
  try {
    const conexao = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Conectado: ${conexao.connection.host}`);
  } catch (erro) {
    console.error(`Erro ao conectar no MongoDB: ${erro.message}`);
    process.exit(1); 
  }
};

export default conectarBanco;