import Head from "next/head";
import { Container, Image } from "react-bootstrap";
export default function Teoria() {
  return (
    <>
      <Head>
        <title>Teoría Átomo</title>
      </Head>

      <main className="text-justify">
        <h1>El átomo</h1>
        <p>
          El átomo es una estructura en la cual se organiza la materia en el
          mundo físico o en la naturaleza. Su estructura está compuesta por
          diferentes combinaciones de tres sub-partículas: los neutrones, los
          protones y los electrones. Las moléculas están formadas por átomos.
        </p>
        <p>El átomo está compuesto por tres subpartículas:</p>
        <ul>
          <li>Protones, con carga positiva.</li>
          <li>Neutrones, sin carga eléctrica (o carga neutra).</li>
          <li>Electrones, con carga negativa.</li>
        </ul>
        <p>El número másico se representa con la letra A.</p>

        <p>
          Hace referencia a la suma de protones y neutrones que contiene el
          elemento. Los isótopos son dos átomos con el mismo número de protones,
          pero diferente número de neutrones.
        </p>

        <p>
          Los isótopos de un mismo elemento, tienen unas propiedades químicas y
          físicas muy parecidas entre sí.
        </p>
        <h2>¿Qué son los isótopos?</h2>
        <p>
          Sucede que los átomos de un elemento no tienen todos el mismo número
          de neutrones en el núcleo. Esto se llama isótopo. Los isótopos tienen
          (casi) las mismas propiedades químicas, pero otras propiedades
          físicas. Se conoce más de un isótopo de prácticamente todos los
          elementos.
        </p>

        <p>
          <strong>
            En el átomo podemos analizar varios tipos de Energías entre las
            cuales podemos mencionar las siguientes:
          </strong>
        </p>
        <ul>
          <li>
            Energía de nivel (E<sub>n</sub>): Es la energía que tiene el átomo
            por tener a su electrón girando en un determinado nivel.
            <br />
            <Image fluid src="/images/energia_nivel.png" className="w-50 p-5" />
          </li>
          <li>
            Energía de excitación (E<sub>E</sub>): Es la energía que se le debe
            suministrar al átomo para elevar a su electrón desde el estado base
            (n=1) hasta cualquier estado excitado.
            <br />
            <Image
              fluid
              src="/images/energia_excitacion.png"
              className="w-50 p-5"
            />
          </li>
          <li>
            Energía de Ionización (E<sub>i</sub>): Es la energía que se le debe
            suministrar al átomo para liberar a su electrón siempre y cuando
            este se encuentre girando en el estado base (n=1).
            <br />
            <Image
              fluid
              src="/images/energia_ionizacion.png"
              className="w-50 p-5"
            />
          </li>

          <li>
            Energía de Enlace (E<sub>e</sub>): Es la energía que se le debe
            subministrar al átomo para liberar a su electrón cuando este se
            encuentre en cualquier estado excitado (nunca en n=1):
            <br />
            <Image
              fluid
              src="/images/energia_enlace.png"
              className="w-50 p-5"
            />
          </li>
        </ul>
        <Container className="pt-5 text-center">
          <p className="pb-3">
            <strong>Representaciones visuales de lo explicado:</strong>
          </p>
          <Image fluid src="/images/explicacion-atomo-1.gif" />
          <Image fluid src="/images/explicacion-atomo-2.png" />
        </Container>
      </main>
    </>
  );
}
