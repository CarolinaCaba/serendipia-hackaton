import React from "react";
import "./DataStyles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Data = () => {
  return (
    <div className="data">
      <div className="container">
        <div className="content">
          <h2>
            <span>Cursos</span>
          </h2>
          <Card>
            <Card.Header>Activo 2023</Card.Header>
            <Card.Body>
              <Card.Title>Matematica</Card.Title>
              <Card.Text>
                Primero de secundaria 
                Total Alumnos inscritos: 37 
                Paralelos: 1
              </Card.Text>
              <Button variant="primary">Editar</Button>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header>Activo 2023</Card.Header>
            <Card.Body>
              <Card.Title>Fisica</Card.Title>
              <Card.Text>
                Tercero de secundaria 
                Total Alumnos inscritos: 44 
                Paralelos: 2
              </Card.Text>
              <Button variant="primary">Editar</Button>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Header>Inactivo</Card.Header>
            <Card.Body>
              <Card.Title>Algebra</Card.Title>
              <Card.Text>
                Cuarto de secundaria 
                Total Alumnos inscritos: 65 
                Paralelos: 3
              </Card.Text>
              <Button variant="primary">Editar</Button>
            </Card.Body>
          </Card>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Data;
