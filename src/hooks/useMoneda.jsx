import React, { useState } from "react";

const useMoneda = () => {
  const [state, setState] = useState('');

  const Seleccionar = () => (
    <>
      <label >Moneda</label>
      <select style={{
          display: 'block'
      }}>
        <option value="">--select</option>
        <option value="mxm">--Pesos</option>
        <option value="mxm">--Bitcoins</option>
      </select>
      <p>Hola</p>
    </>
  );
  //Retornar state, interfaz y func. que modifica el state
  return [state, Seleccionar, setState];
};

export default useMoneda;
