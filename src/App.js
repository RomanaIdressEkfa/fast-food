import './App.css';
import Cards from './Pages/Cards';
import Carousel from './Pages/Carousel';
import Hero from './Pages/Hero';
import Home from './Pages/Home';
import Footer from './Pages/Shares/Footer';
import Navbar from './Pages/Shares/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Home></Home>
      <Cards></Cards>
      <Hero></Hero>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  );
}

export default App;
