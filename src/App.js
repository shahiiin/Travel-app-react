import Destination from "./components/destination/Destination";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Selects from "./components/selects/Selects";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Destination/>
      <Search/>
      <Selects/>
    </div>
  );
}

export default App;
