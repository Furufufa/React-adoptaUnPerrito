import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from './components/Footer';
import Header from './components/Header';
import MyCard from './components/MyCard';
import { perro } from './data/Datos';

import './App.css'

function App() {
  return (
    <>
      <Header title='Adopta un Perrito' />
      <Container className='card-container'>
        <Row>
          {perro.map((perrito) => (
            <Col key={perrito.id} sm>
              <MyCard perrito={perrito} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default App;
