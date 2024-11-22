import React, { useState } from "react";
import { Form, Row, Col, Button, Table } from "react-bootstrap";

export default function Contact() {
  const [formData, setFormData] = useState({
    servicio: "",
    asunto: "",
    nivel1: "",
    nivel2: "",
    nivel3: "",
    producto: "",
    modelo: "",
    fabricante: "",
    sintoma: "",
    inmueble: "",
    descripcion: "",
    aprobador: "",
    archivos: [],
  });

  const [selectedDesign, setSelectedDesign] = useState(""); // Estado para el diseño seleccionado

  const handleDesignChange = (e) => {
    setSelectedDesign(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, archivos: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="container mt-4">
      <h4>Formulario de Solicitud</h4>
      <Form>
        <Row className="mb-3">
          <Col md={12}>
            <Form.Group>
              <Form.Label>Seleccionar Diseño</Form.Label>
              <Form.Select value={selectedDesign} onChange={handleDesignChange}>
                <option value="">Seleccionar</option>
                <option value="diseño003">Diseño 003</option>
                <option value="diseño007">Diseño 007</option>
                <option value="diseño008">Diseño 008</option>
                <option value="diseño010">Diseño 010</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      <Form onSubmit={handleSubmit}>
        {selectedDesign && (
          <>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Nombre de Producto</Form.Label>
                  <Form.Select
                    name="producto"
                    value={formData.producto}
                    onChange={handleChange}
                  >
                    <option value="">Seleccionar</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Síntoma</Form.Label>
                  <Form.Select
                    name="sintoma"
                    value={formData.sintoma}
                    onChange={handleChange}
                  >
                    <option value="">Seleccionar</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Label>Descripción de la Solicitud</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Label>Guion</Form.Label>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Descripción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Ejemplo de guion</td>
                      </tr>
                    </tbody>
                  </Table>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Label>Adjuntar Archivos</Form.Label>
                  <Form.Control
                    type="file"
                    multiple
                    onChange={handleFileChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </>
        )}

        {selectedDesign === "diseño007" && (
          <Row className="mb-3">            
            <Col>
              <Form.Group>
                <Form.Label>Nivel 3</Form.Label>
                <Form.Select
                  name="nivel3"
                  value={formData.nivel3}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        )}

        {selectedDesign === "diseño008" && (
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Nivel 2</Form.Label>
                <Form.Select
                  name="nivel2"
                  value={formData.nivel2}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Nivel 3</Form.Label>
                <Form.Select
                  name="nivel3"
                  value={formData.nivel3}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        )}

        {selectedDesign === "diseño010" && (
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Nivel 2</Form.Label>
                <Form.Select
                  name="nivel2"
                  value={formData.nivel2}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Nivel 1</Form.Label>
                <Form.Select
                  name="nivel1"
                  value={formData.nivel1}
                  onChange={handleChange}
                >
                  <option value="">Seleccionar</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        )}

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}
