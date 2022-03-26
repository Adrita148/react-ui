import "./App.css";
import Header from "./components/Header";
import Headlogo from "./components/Headlogo";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div>
      <Headlogo />
      <Buttons />
      <div className="App">
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default App;
