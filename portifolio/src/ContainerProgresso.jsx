const ContainerProgresso = ({
  tempoTotalFaixa,
  tempoAutalFaixa,
  barraProgresso,
  cliqueAvanco,
}) => {
  const fomatarTempo = (tempoEmSegundos) => {
    const tempo = new Date(null);
    tempo.setSeconds(tempoEmSegundos);
    return tempo.toISOString().slice(14, 19);
  };

  return (
    <section className="container-progresso">
      <div className="progresso-total" ref={barraProgresso} onClick={cliqueAvanco}>
        <div
          className="progresso-atual"
          style={{ width: `${(tempoAutalFaixa * 100) / tempoTotalFaixa}%` }}
        ></div>
        <div
          className="marcador-posicao"
          style={{ left: `${(tempoAutalFaixa * 100) / tempoTotalFaixa}%` }}
        ></div>
      </div>
      <div className="metricas-tempo">
        <p>{fomatarTempo(tempoAutalFaixa)}</p>
        <p>{fomatarTempo(tempoTotalFaixa)}</p>
      </div>
    </section>
  );
};

export default ContainerProgresso;
