import About from "./components/About";
import Background from "./components/Background";
import Customer from "./components/Customer";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Background/>
      <Navbar/>
      <Home/>
      <About/>
      <Customer/>
      <Footer/>
    </div>
  );
}

export default App;
