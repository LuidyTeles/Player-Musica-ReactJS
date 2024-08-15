import { useState, useEffect } from "react"; //permite construir variavel de estado
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BrasCubasImg from "./assets/bras_cubas.jpeg";
import Cape from "./Capa";
import SelectorCharpters from "./SelectChapters";
import ControlButtons from "./ControlButton";

function App() {
  // let play = true;
  const [play, setplay] = useState(false); //retorna o array de true ou false de forma dinamica
  useEffect(() => {
    setplay(true);
  }, []);

  const informbook = {
    name: "Memórias Póstumas de Brás Cubas",
    author: "Machado de Assis",
    chapters: 2,
    cape: BrasCubasImg,
    alternativeText: "Capa do livro Memórias Póstumas de Brás Cubas",
  };

  return (
    <>
      <Cape
        imagemCapa={informbook.cape}
        alternativeText={informbook.alternativeText}
      />
      <SelectorCharpters chapterNow={1} />
      <ControlButtons play={play} setplay={setplay} />
    </>
  );
}

export default App;
