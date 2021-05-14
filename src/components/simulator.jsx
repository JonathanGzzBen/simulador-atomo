import React, { useState } from "react";
import {
  Row,
  Col,
  Image,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import Head from "next/head";

export default function Simulator() {
  const [n, setN] = useState("");
  const [z, setZ] = useState("");

  const getEnergiaDeNivel = (z, n) => {
    return -((13.6 * (z * z)) / (n * n));
  };

  const getEnergiaDeExcitacion = (z, n) => {
    return 13.6 * (z * z) * (1 - 1 / (n * n));
  };

  const getEnergiaDeIonizacion = (z, n) => {
    return (13.6 * (z * z)) / (n * n);
  };

  const getEnergiaDeEnlace = (z, n) => {
    return (13.6 * (z * z)) / (n * n);
  };

  return (
    <>
      <Head>
        <title>Simulador Átomo</title>
      </Head>
      <h1>Simulador de problemas del átomo</h1>
      <Row className="pt-3">
        <Col>
          <Image fluid src="https://via.placeholder.com/350"></Image>
        </Col>
        <Col>
          <InputGroup className="pt-2">
            <InputGroup.Prepend>
              <InputGroup.Text id="input-n">n = </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Nivel de órbita"
              aria-label="n"
              aria-describedby="input-n"
              value={n}
              onChange={(e) =>
                Number(e.target.value) >= 1 ? setN(e.target.value) : ""
              }
            />
          </InputGroup>
          <Form.Text className="text-muted">Valor mayor o igual a 1</Form.Text>
          <InputGroup className="pt-2">
            <InputGroup.Prepend>
              <InputGroup.Text id="input-z">Z = </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Número atómico"
              aria-label="z"
              aria-describedby="input-x"
              value={z}
              onChange={(e) =>
                e.target.value >= 0 && e.target.value <= 50
                  ? setZ(e.target.value)
                  : ""
              }
            />
          </InputGroup>
          <Form.Text className="text-muted">Valor entre 0 y 50</Form.Text>
          <h2 className="pt-3">Energías</h2>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="output-energia-nivel">
                E<sub>n</sub>=
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              readOnly
              placeholder="Energía de nivel"
              aria-label="Energía de nivel"
              aria-describedby="output-energia-nivel"
              value={getEnergiaDeNivel(z, n) || ""}
            />
            <InputGroup.Append>
              <InputGroup.Text>eV</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
          {n !== "1" && (
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="output-energia-excitacion">
                  E<sub>E</sub>=
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                readOnly
                placeholder="Energía de excitación"
                aria-label="Energía de excitación"
                aria-describedby="output-energia-excitacion"
                value={getEnergiaDeExcitacion(z, n) || ""}
              />
              <InputGroup.Append>
                <InputGroup.Text>eV</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          )}
          {n === "1" && (
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="output-energia-ionizacion">
                  E<sub>i</sub>=
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                readOnly
                placeholder="Energía de ionización"
                aria-label="Energía de ionización"
                aria-describedby="output-energia-ionizacion"
                value={getEnergiaDeIonizacion(z, n) || ""}
              />
              <InputGroup.Append>
                <InputGroup.Text>eV</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          )}
          {n !== "1" && (
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id="output-energia-enlace">
                  E<sub>e</sub>=
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                readOnly
                placeholder="Energía de enlace"
                aria-label="Energía de enlace"
                aria-describedby="output-energia-enlace"
                value={getEnergiaDeEnlace(z, n) || ""}
              />
              <InputGroup.Append>
                <InputGroup.Text>eV</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          )}
        </Col>
      </Row>
      <Row className="pt-3">
        <p>Donde:</p>
        <br />
        <ul>
          <li>n = Nivel, órbita o número cuántico</li>
          <li>Z = Número atómico del elemento</li>
          <li>
            E<sub>n</sub>= Energía de nivel
          </li>
          <li>
            E<sub>E</sub>= Energía de excitación
          </li>
          <li>
            E<sub>i</sub>= Energía de ionización
          </li>
          <li>
            E<sub>e</sub>= Energía de enlace
          </li>
        </ul>
      </Row>
    </>
  );
}
