import Calendario from "./components/Calendario";
import Footer from "./components/Footer";
import FraseDoDia from "./components/Frases";
import Header from "./components/Header";

import TextosRecepcao from "./components/TextosRecepcao";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <TextosRecepcao />
      <FraseDoDia />
      <Calendario />
      <Footer />
    </div>
  );
}

export default App;
