import { useState, useRef, useEffect } from "react"; //permite construir variavel de estado
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Capa from "./Capa";
import BotoesControle from "./BotoesControle";
import SeletorMusicas from "./SeletorMusicas";
import musica from "./assets/musicas/musica";
import semCapa from "./assets/capas/semCapa.jpg";
import GerenciadorFaixa from "./GerenciadorFaixa";
import ContainerProgresso from "./ContainerProgresso";

function App() {
  const [taTocando, definirTaTocando] = useState(false); //retorna o array de true ou false de forma dinamica
  const [faixaAtual, definirFaixaAtual] = useState(0);
  const [tempoTotalFaixa, definirTempoTotalFaixa] = useState(0);
  const [tempoAutalFaixa, definirTempoAtualFaixa] = useState(0);
  const [nomeFaixaAtual, definirNomeFaixaAtual] = useState("");
  const tagAudio = useRef(null);
  const barraProgresso = useRef(null);

  //Usando HOOK para controla status da musica
  useEffect(() => {
    if (taTocando) {
      tocarFaixa();
    }
  }, [faixaAtual]);

  //informações de musicas
  const informacoesMusica = {
    nome: nomeFaixaAtual,
    autor: "breathing",
    totalMusicas: musica.length, // Atualizado para usar a quantidade de musica do array
    capa: musica,
    musicas: musica,
    textoAlternativo: semCapa,
  };

  function tocarFaixa() {
    tagAudio.current.play();
    definirTaTocando(true);
  }

  function pausarFaixa() {
    tagAudio.current.pause();
    definirTaTocando(false);
  }

  //Pausar ou rodar musica
  const tocarOuPausarFaixa = () => {
    if (taTocando) {
      pausarFaixa();
    } else {
      tocarFaixa();
    }
  };

  //Define musica que vai tocar após clique do botão
  const avancarFaixa = () => {
    if (informacoesMusica.totalMusicas === faixaAtual + 1) {
      definirFaixaAtual(0);
    } else {
      definirFaixaAtual(faixaAtual + 1);
    }
  };

  //Define musica que vai tocar após clique do botão
  const voltarFaixa = () => {
    if (faixaAtual === 0) {
      definirFaixaAtual(informacoesMusica.totalMusicas - 1);
    } else {
      definirFaixaAtual(faixaAtual - 1);
    }
  };

  const avancar10s = () => {
    tagAudio.current.currentTime += 10;
  };

  const voltar10s = () => {
    tagAudio.current.currentTime -= 10;
  };

  const cliqueAvanco = (evento) => {
    const largura = barraProgresso.current.clientWidth; //clientWidth é uma propriedade que informa a largura do elemento em pixels
    const novoTempo = (evento.nativeEvent.offsetX / largura) * tempoTotalFaixa; //evento vem do proprio navegador onde tem o nativEvent que tem offsetX/offsetY
    tagAudio.current.currentTime = novoTempo;
  };

  return (
    <div id="root">
      <header className="header"></header>

      <aside className="sidebar-left"></aside>

      <aside className="sidebar-right"></aside>

      <main className="content">
        <Capa
          imagemCapa={informacoesMusica.musicas[faixaAtual]?.capa}
          textoAlternativo={informacoesMusica.textoAlternativo}
        />
        <SeletorMusicas nomeFaixaAtual={nomeFaixaAtual} />
        <GerenciadorFaixa
          faixa={informacoesMusica.musicas[faixaAtual]?.faixa}
          referencia={tagAudio}
          definirTempoTotalFaixa={definirTempoTotalFaixa}
          definirTempoAtualFaixa={definirTempoAtualFaixa}
          definirNomeFaixa={definirNomeFaixaAtual}
        />
        <ContainerProgresso
          tempoTotalFaixa={tempoTotalFaixa}
          tempoAutalFaixa={tempoAutalFaixa}
          barraProgresso={barraProgresso}
          cliqueAvanco={cliqueAvanco}
        />

        <BotoesControle
          taTocando={taTocando}
          tocarOuPausarFaixa={tocarOuPausarFaixa}
          avancarFaixa={avancarFaixa}
          voltarFaixa={voltarFaixa}
          avancar10s={avancar10s}
          voltar10s={voltar10s}
        />
      </main>

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
