import './App.css';
import Cards from './Pages/Cards';
import Carousel from './Pages/Carousel';
import Carousel2 from './Pages/Carousel2';
import Hero from './Pages/Hero';
import Home from './Pages/Home';
import Map from './Pages/Map';
import Footer from './Pages/Shares/Footer';
import Login from './Pages/Login';
import Navbar from './Pages/Shares/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Home></Home>
      <Cards></Cards>
      <Hero></Hero>
      {/* <Carousel></Carousel> */}
      <Carousel2></Carousel2>

      {/* <Login></Login> */}
      {/* <Login></Login> */}
      <Map></Map>
      <Footer></Footer>
    </div>
  );
}

export default App;
