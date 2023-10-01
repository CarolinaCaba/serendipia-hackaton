import React from "react";
import "./HeroStyles.css";
import Figure from 'react-bootstrap/Figure';
import teacher from '../../assets/teacher.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero() {
  return (
    <Container>
        <Figure>
      <Figure.Image
        width={240}
        height={210}
        src= {teacher}
        roundedCircle
      />
    </Figure>
    <div className="texto">
    <h3><span>Nombre:</span> Maribel Torrico</h3>
        <h3><span>Colegio:</span> San Ignacio </h3>
        <h3><span>Materias:</span> Matematica, Fisica</h3>
        <h3><span>Fecha de inicio:</span> 2020</h3>
        <h3><span>E-mail:</span> maribeltorrico@gmail.com</h3>
    </div>
    </Container>
  );
}

export default Hero;