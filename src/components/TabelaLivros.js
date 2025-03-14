import React from "react";
import { Link } from "react-router-dom";

const TabelaLivros = ({ livros, removerLivro }) => {
  return (
    <div className="livros">
      <h1>Tabela de livros</h1>
      {livros.length === 0 && <h2>Nenhum livro cadastrado!</h2>}
      {livros.length > 0 && (
        <table className="tabela">
          <thead>
            <tr>
              <th width="17%">ISBN</th>
              <th>Título</th>
              <th>Autor</th>
              <th width="7%"></th>
              <th width="9%"></th>
            </tr>
          </thead>
          <tbody>
            {livros.map((Livro) => (
              <tr key={Livro.isbn}>
                <td>{Livro.isbn}</td>
                <td>{Livro.titulo}</td>
                <td>{Livro.autor}</td>
                <td>
                  <button className="botao editar">
                    <Link to={`/editar/${Livro.isbn}`}>Editar</Link>
                  </button>
                </td>
                <td>
                  <button
                    className="botao remover"
                    onClick={() => {
                      removerLivro(Livro);
                    }}
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TabelaLivros;
