import { useState, useEffect } from "react";
export default function Welcome(props) {
  const { message, name } = props;
  const [counter, setCounter] = useState(0);
  const [semaforo, setSemaforo] = useState(false);

  useEffect(() => {
    console.log(semaforo);
  }, [semaforo]);

  const contar = () => {
    // console.log("Entrando en la función de contar");
    setCounter(counter + 1);
    setSemaforo(!semaforo);
  };

  // console.log(semaforo);

  return (
    <div>
      <h1>Hola, {name}</h1>
      <p>{message}</p>
      <h2>Contador de react con hooks</h2>
      <h4>El número del contador es {counter} </h4>
      <p>El semáforo está en color {semaforo ? "rojo" : "verde"}</p>
      <button type="submit" onClick={contar}>
        Sumar Contador
      </button>
    </div>
  );
}
