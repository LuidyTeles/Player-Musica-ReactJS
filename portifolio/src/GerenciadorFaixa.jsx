const GerenciadorFaixa = ({
  faixa,
  referencia,
  definirTempoTotalFaixa,
  definirTempoAtualFaixa,
  definirNomeFaixa,
}) => {
  const nomeFaixa = (caminho) => {
    const partes = caminho.split("/");
    const nome = partes[partes.length - 1];
    return nome;
  };

  const nome = nomeFaixa(faixa);

  return (
    <audio
      src={faixa}
      ref={referencia}
      onLoadedMetadata={() => {
        definirTempoTotalFaixa(referencia.current.duration);
        definirNomeFaixa(nome);
      }}
      onTimeUpdate={() =>
        definirTempoAtualFaixa(referencia.current.currentTime)
      }
    />
  );
};

export default GerenciadorFaixa;
