import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";


function App() {
  return (
      <div className="App">
        <Router>
     <Navbar />
     <Routes>
     <Route exact path='/about' element={<About />}></Route>
     </Routes>
     <Home />
     </Router>
    </div>
  );
}

export default App;
