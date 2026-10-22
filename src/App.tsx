import Calendario from "./components/Calendario";
import FraseDoDia from "./components/Frases";
import Header from "./components/Header";

import TextosRecepcao from "./components/TextosRecepcao";

function App() {
  return (
    <>
      <Header />
      <TextosRecepcao />
      <FraseDoDia />
      <Calendario />
    </>
  );
}

export default App;
