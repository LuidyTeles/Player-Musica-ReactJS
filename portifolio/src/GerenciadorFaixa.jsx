const GerenciadorFaixa = ({
  faixa,
  referencia,
  definirTempoTotalFaixa,
  definirTempoAtualFaixa,
}) => {
  return (
    <audio
      src={faixa}
      ref={referencia} //joga uma referencia para variavel
      onLoadedMetadata={
        () => definirTempoTotalFaixa(referencia.current.duration) //Pegar duração da faixa em segundos
      }
      onTimeUpdate={
        () => definirTempoAtualFaixa(referencia.current.currentTime) //Sempre que pega tempo ele atualiza variavel de estado
      }
    />
  );
};

export default GerenciadorFaixa;
