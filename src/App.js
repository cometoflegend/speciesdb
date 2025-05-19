import './App.css';
import EspeciesList from './comp/EspeciesList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { EspeciesProvider } from './comp/EspeciesProvider';
import Timeline from './comp/Timeline';
import Mapa from './comp/Mapa';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const App = () => {

  return (

    <EspeciesProvider>

      <Router>

        <header className="bg-light p-3">

          <div className="navbar-expand-sm container-fluid d-flex justify-content-between">

            <h1>Especies Extintas</h1>

            <div className='container-fluid  align-items-right'>
              <Navbar expand="lg">
                <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" className="nav-link">Lista</Nav.Link>
                    <Nav.Link as={Link} to="/timeline" className="nav-link">Línea del Tiempo</Nav.Link>
                    <Nav.Link as={Link} to="/mapa" className="nav-link">Mapa</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                </Container>
              </Navbar>

            </div>

          </div>

        </header>

        <main className="container mt-4">

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

