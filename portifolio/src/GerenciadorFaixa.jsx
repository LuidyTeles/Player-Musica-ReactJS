const GerenciadorFaixa = ({ faixa, referencia }) => {
  return <audio src={faixa} ref={referencia} />; //joga uma referencia para variavel
};

export default GerenciadorFaixa;
