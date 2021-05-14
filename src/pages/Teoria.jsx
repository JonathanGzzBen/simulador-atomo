import Head from "next/head";
import { Image } from "react-bootstrap";
export default function Teoria() {
  return (
    <>
      <Head>
        <title>Teoría Átomo</title>
      </Head>

      <main className="text-justify">
        <h1>Velocidad relativista</h1>
        <p>
          La velocidad de la luz es el límite de velocidad del universo, por lo
          que se deduce que ningún observador, verá cualquier otro observador
          acercarse o alejarse a una velocidad mayor que c. Pero ¿y si los
          observadores A y B se mueven al mismo tiempo en direcciones opuestas
          acercándose con velocidades cercanas a c, según son vistos por un
          observador externo? ¿Cómo medirán A y B sus velocidades relativas?.
          Este es un ejemplo de adición de velocidades de Einstein. En el
          cálculo de abajo, se toman como positivas las velocidades hacia la
          derecha.
        </p>
        <Image src="/images/EcuacionesVelocidadRelativa.png" fluid></Image>
        <h2>Ley relativista</h2>
        <p>
          La ley relativista de composición de velocidades implica que la suma
          de dos velocidades no excede nunca a la de la luz y que por más que
          incrementemos sucesivamente la velocidad de un objeto, éste nunca
          sobrepasará la velocidad de la luz. La fórmula para sumar dos
          velocidades se deduce de las ecuaciones que transforman tiempo y
          espacio y es donde u y v son las velocidades que queremos sumar, c la
          velocidad de la luz y u´ la velocidad resultante.
        </p>
        <Image src="/images/UEcuacion.png" fluid></Image>
        <p>
          Comprobad que si sumamos dos velocidades menores o iguales que c, el
          resultado es siempre menor o igual que c.
        </p>
        <p>
          La teoría de Einstein establece un límite de velocidad infranqueable,
          la barrera de la velocidad de la luz. Desde su descubrimiento, a
          principios del siglo XX, muchos científicos han intentado derribar
          esta barrera proponiendo teorías y realizando experimentos para buscar
          partículas que se movieran a velocidades superiores a la de la luz.
        </p>
        <p>
          En muchas ocasiones los científicos han ideado experimentos y
          analizado fenómenos en los que parecía que se alcanzaban velocidades
          superiores a la de la luz. Muchos de ellos se basan en una
          interpretación errónea de lo que es la velocidad de un objeto. Por
          ejemplo, supongamos que observamos dos objetos que se mueven cada uno
          con una velocidad 0,6 veces la de la luz apartándose el uno del otro.
          La separación entre ambos objetos crecerá a una velocidad 1,2 veces la
          de la luz. Sin embargo, no hay ningún cuerpo moviéndose a esta
          velocidad, luego no se viola la ley de composición de velocidades.
          Otro ejemplo sencillo es el siguiente: imaginemos una cadena de
          bombillas muy larga (como las de los juegos de luces de Navidad)
          conectada a un dispositivo (podemos poner un reloj independiente a
          cada bombilla) de tal manera que se vayan encendiendo y apagando una
          bombilla detrás de otra, creando en nuestro cerebro la impresión de
          que un punto luminoso se va desplazando. Nada nos impide haber
          programado los relojes para que el punto luminoso ficticio recorra la
          cadena a mayor velocidad que la de la luz. Sin embargo, es obvio que
          lo que se está moviendo no es un objeto real (ninguna bombilla se
          mueve). Es nuestro cerebro el que crea la ilusión de movimiento.
        </p>
      </main>
    </>
  );
}
