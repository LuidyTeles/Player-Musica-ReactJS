import "./App.css";
import BrasCubasImg from "./assets/bras_cubas.jpeg";
import Cape from "./Capa";

function App() {
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
    </>
  );
}

export default App;
