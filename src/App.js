import  CarouselImg  from "./components/carousel/CarouselImg";
import Destination from "./components/destination/Destination";
import Footer from "./components/footer/Footer";
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
      <CarouselImg/>
      <Footer/>
    </div>
  );
}

export default App;
