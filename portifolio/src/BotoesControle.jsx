const BotoesControle = ({
  tocarOuPausarFaixa,
  taTocando,
  voltarFaixa,
  avancarFaixa,
  avancar10s,
  voltar10s,
}) => {
  return (
    <div className="caixa-botoes">
      <button onClick={voltarFaixa}>
        <i className="bi bi-skip-start"></i>
      </button>
      <button onClick={voltar10s}>
        <i className="bi bi-arrow-counterclockwise"></i>
      </button>
      <button onClick={tocarOuPausarFaixa}>
        <i className={`bi bi-${taTocando ? "pause" : "play"}-circle-fill`}></i>
      </button>
      <button onClick={avancar10s}>
        <i className="bi bi-arrow-clockwise"></i>
      </button>
      <button onClick={avancarFaixa}>
        <i className="bi bi-skip-end"></i>
      </button>
    </div>
  );
};

export default BotoesControle;
