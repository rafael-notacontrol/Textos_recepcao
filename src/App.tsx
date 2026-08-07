import Calendario from "./components/Calendario";
import FraseDoDia from "./components/Frases";
import Header from "./components/Header";
import Meme from "./components/Meme";
import TextosRecepcao from "./components/TextosRecepcao";

function App() {
  return (
    <>
      <Header />
      <TextosRecepcao />
      <FraseDoDia />
      <Calendario />
      <Meme />
    </>
  );
}

export default App;
