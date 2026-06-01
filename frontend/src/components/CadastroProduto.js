import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroProduto = () => {
  const navigate = useNavigate();
  
  //estado para guardar os dados digitados no formulário
  const [produto, setProduto] = useState({
    nome: '',
    preco: '',
    imagem: '',
    descricao: '',
    fabricante: '',
    especificacao: ''
  });

  //função para atualizar o estado quando o usuário digitar algo
  const handleChange = (e) => {
    setProduto({ ...produto, [e.target.name]: e.target.value });
  };

  //função que envia os dados para o backend quando clica em "Salvar"
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const resposta = await fetch('http://localhost:3001/api/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
      });

      if (resposta.ok) {
        alert('Produto cadastrado com sucesso!');
        navigate('/'); 
      } else {
        alert('Erro ao cadastrar o produto.');
      }
    } catch (erro) {
      console.error("Erro na requisição:", erro);
      alert('Erro de conexão com o servidor.');
    }
  };

  return (
    <div className="container mt-4 mb-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: '600px' }}>
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0 text-center">Cadastrar Novo Produto</h4>
        </div>
        <div className="card-body p-4">
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Nome do Produto</label>
              <input type="text" className="form-control" name="nome" value={produto.nome} onChange={handleChange} required />
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label fw-bold">Preço (R$)</label>
                <input type="number" step="0.01" className="form-control" name="preco" value={produto.preco} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-bold">Fabricante</label>
                <input type="text" className="form-control" name="fabricante" value={produto.fabricante} onChange={handleChange} required />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">URL da Imagem</label>
              <input type="url" className="form-control" name="imagem" placeholder="https://..." value={produto.imagem} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Especificações (ex: 128GB, 6GB RAM)</label>
              <input type="text" className="form-control" name="especificacao" value={produto.especificacao} onChange={handleChange} required />
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold">Descrição</label>
              <textarea className="form-control" name="descricao" rows="3" value={produto.descricao} onChange={handleChange} required></textarea>
            </div>

            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-success btn-lg">Salvar Produto</button>
              <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/')}>Cancelar</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default CadastroProduto;