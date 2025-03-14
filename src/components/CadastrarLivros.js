import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";

const CadastrarLivros = (props) => {
  const [livro, setLivro] = useState({
    id: props.livro.id,
    isbn: props.livro.isbn,
    titulo: props.livro.titulo,
    autor: props.livro.autor,
  });
  const [redirecionar, setRedirecionar] = useState(false);

  // Criando referências com useRef
  const tituloRef = useRef(null);
  const autorRef = useRef(null);
  const isbnRef = useRef(null);

  const handleLivroForm = (e) => {
    e.preventDefault();
    if (props.editarLivro) {
      props.editarLivro(livro);
    } else {
      props.inserirLivro(livro);
    }
    setRedirecionar(true);
  };

  if (redirecionar) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={handleLivroForm}>
      <h1>Cadastrar livro</h1>
      <p>
        <label htmlFor="fisbn">
          ISBN: Formato - (
          <span style={{ color: "red" }}> 978-85-7522-xxx-x </span>)
        </label>
        <input
          type="text"
          autoFocus
          ref={isbnRef} // Usando useRef
          id="fisbn"
          required
          pattern="^978-85-7522-[0-9]{3}-[0-9]{1}$"
          value={livro.isbn}
          onChange={(e) =>
            setLivro({
              ...livro,
              isbn: e.target.value,
            })
          }
        />
      </p>
      <p>
        <label htmlFor="ftitulo">Título</label>
        <input
          type="text"
          ref={tituloRef} // Usando useRef
          id="ftitulo"
          required
          value={livro.titulo}
          onChange={(e) =>
            setLivro({
              ...livro,
              titulo: e.target.value,
            })
          }
        />
      </p>
      <p>
        <label htmlFor="fautor">Autor</label>
        <input
          type="text"
          ref={autorRef} // Usando useRef
          id="fautor"
          required
          value={livro.autor}
          onChange={(e) =>
            setLivro({
              ...livro,
              autor: e.target.value,
            })
          }
        />
      </p>
      <p>
        <button type="submit" className="botao cadastrar">
          Cadastrar
        </button>
      </p>
    </form>
  );
};

export default CadastrarLivros;
