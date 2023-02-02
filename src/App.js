import logo from './logo.svg';
import './App.css';
import Home from './Components/HomePage/Home';
import Service from './Components/ServicesPage/Service';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <>
       <Router>
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/services' element={<Service />} />
    </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
