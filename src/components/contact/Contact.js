import React from "react";
import "./ContactStyles.css";
import Form from "react-bootstrap/Form";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="form-container">
          <form>
            <span><h3>Formulario de Envio y Hash</h3></span>
            <div>
              <label>Nombre</label>
              <input type="text" placeholder="Ingrese su nombre" />
            </div>
            <br/>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Ingrese su e-mail" />
            </div>
            <br/>
            <div>
              <label>Destino</label>
              <input
                type="text"
                placeholder="Ingrese nombre de universidad/empresa de destino"
              />
            </div>
            <br/>
            <div>
      <Form.Select size='lg'>
        <option>Extracurriculares</option>
        <option>Secundaria</option>
        <option>Primaria</option>
        <option>Cursos y certificados</option>
      </Form.Select>
      <br />
      <Form.Select size='lg'>
      <option>Extracurriculares</option>
        <option>Secundaria</option>
        <option>Primaria</option>
        <option>Cursos y certificados</option>
        <option>Ninguno</option>
      </Form.Select>
      <br/>
      <Form.Select size='lg'>
      <option>Extracurriculares</option>
        <option>Secundaria</option>
        <option>Primaria</option>
        <option>Cursos y certificados</option>
        <option>Ninguno</option>
      </Form.Select>
      <br/>
      <Form.Select size='lg'>
      <option>Extracurriculares</option>
        <option>Secundaria</option>
        <option>Primaria</option>
        <option>Cursos y certificados</option>
        <option>Ninguno</option>
      </Form.Select>
    </div>
    <br/>
            <button className="buttonprimary">Generar Codigo</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
