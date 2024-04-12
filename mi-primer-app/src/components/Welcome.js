import { useState } from "react";
export default function Welcome(props) {
  const { message, name } = props;
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Hola, {name}</h1>
      <p>{message}</p>
      <h2>Contador de react con hooks</h2>
      <h4>El número del contador es {counter} </h4>
      <button type="submit" onClick={() => setCounter(counter + 1)}>
        Sumar Contador
      </button>
    </div>
  );
}
