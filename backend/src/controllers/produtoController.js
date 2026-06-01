import Produto from '../models/Produto.js';

//função para buscar todos os produtos
export const getProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao buscar os produtos no banco." });
  }
};

//função para cadastrar um novo produto 
export const criarProduto = async (req, res) => {
  try {
    const novoProduto = new Produto(req.body);
    await novoProduto.save();
    res.status(201).json(novoProduto);
  } catch (erro) {
    res.status(400).json({ mensagem: "Erro ao cadastrar o produto. Verifique os dados." });
  }
};

//busca um único produto pelo id
export const getProdutoPorId = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) return res.status(404).json({ mensagem: "Produto não encontrado" });
    res.json(produto);
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao buscar o produto." });
  }
};