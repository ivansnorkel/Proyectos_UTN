//rafce = react arrow function component export default 
import React, { useState } from 'react';

const EstadosScreen = () => {
  const [contador, setContador] = useState(1);
  const [isHiddenText, setIsHiddenText] = useState(true);
  const [errorMinimoContador, setErrorMinimoContador] = useState(false);

  const inc = () => {
    setContador(contador + 1);
    setErrorMinimoContador(false); // Reinicia el error si hay un incremento
  };

  const dec = () => {
    if (contador - 1 < 0) {
      setErrorMinimoContador(true);
    } else {
      setContador(contador - 1);
      setErrorMinimoContador(false); // Elimina el error si el contador es válido
    }
  };

  const handleShowHiddenText = () => {
    setIsHiddenText(!isHiddenText);
  };

  return (
    <div>
      <h1>Estados en React</h1>
      <div>
        <button onClick={inc}>+</button>
        <span>{contador}</span>
        <button onClick={dec}>-</button>
      </div>
      {errorMinimoContador && <p style={{ color: 'red' }}>El estado no puede ser negativo</p>}
      <button onClick={handleShowHiddenText}>Abrir</button>
      {!isHiddenText && <span>Texto oculto</span>}
    </div>
  );
};

export default EstadosScreen;
