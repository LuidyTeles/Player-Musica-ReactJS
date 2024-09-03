function SeletorMusicas(props) {
  return (
    <button className="seletor">
      <i className="bi bi-list"></i>
      <p>{`Música ${props.musicaAtual}`}</p>
    </button>
  );
}

export default SeletorMusicas;
