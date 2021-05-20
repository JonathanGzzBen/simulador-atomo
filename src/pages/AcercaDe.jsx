import { Col, Container, Image, Row, Table } from "react-bootstrap";

const miembros = [
  {
    title: "Desarrollador",
    nombre: "Jonathan González Benavides",
    description: (
      <p>
        Hola, soy Jonathan González Benavides y soy quien hizo este simulador.
        Puedes conocerme mejor y ver mis otros proyectos{" "}
        <a href="https://jonathangzzben.github.io" target="_blank">
          en mi sitio web.
        </a>
      </p>
    ),
    imageUrl: "/images/jonathan.png",
    matricula: "1867000",
    carrera: "ITS",
  },
  {
    title: "Diseñador",
    nombre: "Missael Alexis Porras Rocha",
    description: (
      <p>
        Me llamo Missael Alexis Porras Rocha y soy quien diseñó el
        comportamiento del simulador.
      </p>
    ),
    imageUrl: "",
    matricula: "1738482",
    carrera: "IMA",
  },
  {
    title: "Recursos gráficos",
    nombre: "Ariadna Selene Aguilar Morales",
    description: (
      <p>
        Ariadna Selene Aguilar Morales: Soy quien reclutó información y recursos
        gráficos para el simulador
      </p>
    ),
    imageUrl: "/images/ariadna.jpeg",
    matricula: "1898734",
    carrera: "IAS",
  },
  {
    title: "Investigadora",
    nombre: "Alejandra Coss Patiño",
    description: (
      <p>
        Hola, soy Alejandra Coss Patiño y soy quien buscó la información
        mostrada en la sección "Teoría".
      </p>
    ),
    imageUrl: "/images/alejandra.jpeg",
    matricula: "1911016",
    carrera: "ITS",
  },
];

const getMiembroElement = ({ title, description, imageUrl }) => (
  <Container>
    <Row>
      <h2>{title}</h2>
    </Row>
    <Row className="justify-content-center">
      <>
        {imageUrl && (
          <Col sm={10} md={4}>
            <Image fluid src={imageUrl} className="pt-1 pb-3" />
          </Col>
        )}
        <Col md={6}>{description}</Col>
      </>
    </Row>
  </Container>
);

export default function AcercaDe() {
  return (
    <Container fluid>
      <Row>
        <h1>Acerca De</h1>
      </Row>
      {miembros &&
        miembros.map((miembro, index) => (
          <div key={index}>{getMiembroElement(miembro)}</div>
        ))}

      <Row className="pt-3">
        <h2>Datos</h2>
        <Table hover striped bordered>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Matrícula</th>
              <th>Carrera</th>
            </tr>
          </thead>
          <tbody>
            {miembros &&
              miembros.map(({ nombre, matricula, carrera }) => (
                <tr key={nombre}>
                  <td>{nombre}</td>
                  <td>{matricula}</td>
                  <td>{carrera}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
}
