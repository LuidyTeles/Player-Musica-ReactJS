const ControlButtons = (props) => {
  return (
    <div className="caixa-botoes">
      <button>
        <i className="bi bi-skip-start"></i>
      </button>
      <button>
        <i className="bi bi-arrow-counterclockwise"></i>
      </button>
      <button onClick={() => props.setplay(true)}>
        <i className={`bi bi-${props.play ? "pause" : "play"}-circle-fill`}></i>
      </button>
      <button>
        <i className="bi bi-arrow-clockwise"></i>
      </button>
      <button>
        <i className="bi bi-skip-end"></i>
      </button>
    </div>
  );
};

export default ControlButtons;
