import React, {useState, useEffect} from "react";

function Home() {
  const [estadoRojo, setEstadoRojo] = useState('apagada');
  const [estadoAmarillo, setEstadoAmarillo] = useState('apagada');
  const [estadoVerde, setEstadoVerde] = useState('apagada');

  useEffect(() => {
  }, [estadoRojo, estadoAmarillo, estadoVerde]);

  return (
    <div>
      <div id="barra"></div>
      <div id="semaforo">
        <div
          className="luz rojo"
          id={estadoRojo}
          onClick={() =>
            setEstadoRojo('encendido') ||
            setEstadoAmarillo('apagado') ||
            setEstadoVerde('apagado')
          }
        ></div>
        <div
          className="luz amarillo"
          id={estadoAmarillo}
          onClick={() =>
            setEstadoRojo('apagado') ||
            setEstadoAmarillo('encendido') ||
            setEstadoVerde('apagado')
          }
        ></div>
        <div
          className="luz verde"
          id={estadoVerde}
          onClick={() =>
            setEstadoRojo('apagado') ||
            setEstadoAmarillo('apagado') ||
            setEstadoVerde('encendido')
          }
        ></div>
      </div>
    </div>
  );
}
export default Home;
