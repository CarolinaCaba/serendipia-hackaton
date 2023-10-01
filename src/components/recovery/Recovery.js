import React from "react";
import { Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import "./RecoveryStyles.css";
function Recovery() {
  return (
    <div className="recovery">
      <div className="container">
        <div className="content">
          <h2>
            <span><h3>Matematica primero de secundaria</h3> </span>
          </h2>
          <Table className="table table-sm">
            <thead className="table-active">
              <tr>
                <th><p>Estudiante</p></th>
                <th><p>Calificacion</p></th>
                <th><p>Examen</p></th>
                <th><p></p></th>
              </tr>
            </thead>
            <tbody>
              <tr>
            
                <td><p>Adrian Soliz Suarez</p></td>
                <td><p>40</p></td>
                <td><p>
                  {" "}
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>{" "}</p>
                </td>
                <td>
                 <p> {" "}
                  <button className='ButtonSec' variant="secondary" size="sm">Editar</button></p>
                </td>
              </tr>
              <tr>
               
                <td><p>Heyni Valentina Bravo</p></td>
                <td><p>67</p></td>
                <td><p>
                  {" "}
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>
                  </p></td>
                <td><p>
                  {" "}
                  <button>Editar</button>
                  </p>
                </td>
              </tr>
              <tr>
                <td><p>Maria Rodriguez Lopez</p></td>
                <td><p>77</p></td>
                <td><p>
                  {" "}
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>{" "}
                  </p>
                </td>
                <td><p>
                  {" "}
                  <button>Editar</button>
                  </p></td>
              </tr>
              <tr>
                <td><p>Antonio Martinez Ruiz</p></td>
                <td><p>80</p></td>
                <td><p>
                  {" "}
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>{" "}
                  </p>
                </td>
                <td><p>
                  {" "}
                  <button>Editar</button>
                </p></td>
              </tr>
              <tr>
                <td><p>Ana Garcia Perez</p></td>
                <td><p>100</p></td>
                <td>
                  <p>
                  {" "}
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>{" "}
                  </p>
                </td>
                <td>
                  <p>
                  {" "}
                  <button>Editar</button>
                  </p>
                </td>
              </tr>
              <tr>
                <td><p>Luis Jaime Miranda</p></td>
                <td><p>0</p></td>
                <td>
                  <p>
                  {" "}
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" />
                  </Form.Group>{" "}
                  </p>
                </td>
                <td>
                  <p>
                  {" "}
                  <button>Editar</button>
                  </p>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
export default Recovery;
