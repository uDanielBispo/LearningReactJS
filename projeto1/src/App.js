import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/home';
import Empresa from './components/pages/empresa';
import Contato from './components/pages/contato';


function App() {

  return (
    <Router> 
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/empresa">Empresa</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route path="/empresa" element={<Empresa />} > </Route>
        <Route path="/contato" element={<Contato />} > </Route>
      </Routes>
    </Router>
  )
}

export default App;


