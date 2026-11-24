import Snowfall from "react-snowfall";
import Calendario from "./components/Calendario";
import Footer from "./components/Footer";
import FraseDoDia from "./components/Frases";
import Header from "./components/Header";

import TextosRecepcao from "./components/TextosRecepcao";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Snowfall
        snowflakeCount={80}
        speed={[0.5, 1.0]}
        radius={[1.0, 2.0]}
        wind={[-0.5, 0.5]}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
      />
      <Header />
      <TextosRecepcao />
      <FraseDoDia />
      <Calendario />
      <Footer />
    </div>
  );
}

export default App;
