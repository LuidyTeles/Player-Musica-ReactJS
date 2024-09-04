function SeletorMusicas(props) {
  // Remove qualquer extensão de arquivo
  const nomeFaixaAtual = props.nomeFaixaAtual.replace(/\.[^/.]+$/, "");

  return (
    <button className="seletor">
      <i className="bi bi-list"></i>
      <p>{nomeFaixaAtual}</p>
    </button>
  );
}

export default SeletorMusicas;
