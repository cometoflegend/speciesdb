import './App.css';
import EspeciesList from './comp/EspeciesList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { EspeciesProvider } from './comp/EspeciesProvider';
import Timeline from './comp/Timeline';
import Mapa from './comp/Mapa';

const App = () => {

  return (

    <EspeciesProvider>

      <Router>

        <header>

          <h1>Especies Extintas</h1>
      
          <nav>

            <Link to="/">Lista</Link>
            <Link to="/timeline">Línea del Tiempo</Link>
            <Link to="/mapa">Mapa</Link>

          </nav>

        </header>

        <main>

          <Routes>

            <Route path="/" element={<EspeciesList />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/mapa" element={<Mapa />} />

          </Routes>

        </main>

      </Router>

    </EspeciesProvider>
  );

};


export default App;
