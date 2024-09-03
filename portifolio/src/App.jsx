import { useState, useRef } from "react"; //permite construir variavel de estado
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Music1 from "./assets/music1.jpeg";
import Capa from "./Capa";
import BotoesControle from "./BotoesControle";
import SeletorMusicas from "./SeletorMusicas";
import musica from "./assets/musicas/musica";
import GerenciadorFaixa from "./GerenciadorFaixa";

function App() {
  // let play = true;
  const [taTocando, definirTaTocando] = useState(false); //retorna o array de true ou false de forma dinamica
  const [faixaAtual, definirFaixaAtual] = useState(0);
  const tagAudio = useRef(null);

  const informacoesMusica = {
    nome: "FellingSongs",
    autor: "breathing",
    totalMusicas: 2,
    capa: Music1,
    musicas: musica,
    textoAlternativo: "Capa da faixa de FellingSongs",
  };

  const tocarFaixa = () => {
    if (tagAudio.current) {
      tagAudio.current.play();
      definirTaTocando(true);
    }
  };

  const pausarFaixa = () => {
    if (tagAudio.current) {
      tagAudio.current.pause();
      definirTaTocando(false);
    }
  };

  const tocarOuPausarFaixa = () => {
    if (taTocando) {
      pausarFaixa();
    } else {
      tocarFaixa();
    }
  };

  return (
    <div className="container">
      <Capa
        imagemCapa={informacoesMusica.capa}
        textoAlternativo={informacoesMusica.textoAlternativo}
      />
      <SeletorMusicas musicaAtual={faixaAtual + 1} />
      <GerenciadorFaixa
        faixa={informacoesMusica.musicas[faixaAtual]}
        referencia={tagAudio}
      />
      <BotoesControle
        taTocando={taTocando}
        tocarOuPausarFaixa={tocarOuPausarFaixa}
      />
    </div>
  );
}

export default App;
