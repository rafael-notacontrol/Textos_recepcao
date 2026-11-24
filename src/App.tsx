import Snowfall from "react-snowfall";
import Calendario from "./components/Calendario";
import Footer from "./components/Footer";
import FraseDoDia from "./components/Frases";
import Header from "./components/Header";

import TextosRecepcao from "./components/TextosRecepcao";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Snowfall snowflakeCount={100} speed={[1.0, 1.0]} />
      <Header />
      <TextosRecepcao />
      <FraseDoDia />
      <Calendario />
      <Footer />
    </div>
  );
}

export default App;
