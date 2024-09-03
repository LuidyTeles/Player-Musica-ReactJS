function SeletorMusicas(props) {
  return (
    <button className="seletor">
      <i className="bi bi-list"></i>
      <p>{`${props.nomeFaixaAtual}`}</p>
    </button>
  );
}

export default SeletorMusicas;
