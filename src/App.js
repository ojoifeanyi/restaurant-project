import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Contact from './components/contactus/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import Product from './components/product/Product';


function App() {
  return (
      <div className="App">
        <Router>
     <Navbar />
     <Routes>
     <Route exact path='/restaurant-project' element={<Home />}></Route>
     <Route exact path='/about' element={<About />}></Route>
     <Route exact path='/product' element={<Product />}></Route>
     <Route exact path='/contact' element={<Contact />}></Route>
     </Routes>
  
     </Router>
    </div>
  );
}

export default App;
