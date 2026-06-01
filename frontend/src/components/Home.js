import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  //cria um estado para guardar os produtos que virão do banco
  const [produtos, setProdutos] = useState([]);

  //assim que a tela carregar, ele vai buscar os produtos no backend
  useEffect(() => {
    fetch('http://localhost:3001/api/produtos')
      .then((resposta) => resposta.json())
      .then((dados) => setProdutos(dados))
      .catch((erro) => console.error("Erro ao buscar os produtos:", erro));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Vitrine Virtual</h2>
      <div className="row">
        {produtos.map((produto) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={produto._id}>
            <div className="card shadow-sm h-100">
              <img 
                src={produto.imagem} 
                className="card-img-top" 
                alt={produto.nome}
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text text-muted">{produto.descricao}</p>
                <h4 className="card-text text-primary">R$ {produto.preco.toFixed(2)}</h4>
                
                <Link to={`/produto/${produto._id}`} className="btn btn-primary mt-auto">
                  Ver Detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;