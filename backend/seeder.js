import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Produto from './src/models/Produto.js';
import conectarBanco from './src/config/db.js';

dotenv.config();
conectarBanco();

const produtosMock = [
    {
      nome: "Smartphone Galaxy",
      preco: 1999.90,
      imagem: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
      descricao: "Smartphone com câmera de alta resolução e bateria de longa duração.",
      fabricante: "Samsung",
      especificacao: "128GB, 6GB RAM, Tela 6.5"
    },
    {
      nome: "Notebook Pro",
      preco: 4500.00,
      imagem: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
      descricao: "Notebook ideal para trabalho pesado e design gráfico.",
      fabricante: "Dell",
      especificacao: "i7, 16GB RAM, SSD 512GB"
    },
    {
      nome: "Headphone Premium",
      preco: 299.90,
      imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      descricao: "Som imersivo com cancelamento de ruído ativo.",
      fabricante: "JBL",
      especificacao: "Bateria 30h, Bluetooth 5.0"
    },
    {
      nome: "Smartwatch Fit",
      preco: 850.00,
      imagem: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
      descricao: "Monitoramento de saúde e notificações no pulso.",
      fabricante: "Apple",
      especificacao: "GPS, À prova d'água"
    },
    {
      nome: "Câmera DSLR",
      preco: 3500.00,
      imagem: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
      descricao: "Câmera profissional para fotos e vídeos em 4K.",
      fabricante: "Canon",
      especificacao: "24MP, Lente 18-55mm"
    },

];

const importarDados = async () => {
  try {
    await Produto.deleteMany();
    await Produto.insertMany(produtosMock); 
    console.log('Dados importados com sucesso!');
    process.exit();
  } catch (error) {
    console.error('Erro ao importar dados', error);
    process.exit(1);
  }
};

importarDados();