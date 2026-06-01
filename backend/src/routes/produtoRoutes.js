import express from 'express';
import { getProdutos, criarProduto, getProdutoPorId } from '../controllers/produtoController.js';

const router = express.Router();

router.get('/', getProdutos);
router.post('/', criarProduto);
router.get('/:id', getProdutoPorId); 

export default router;