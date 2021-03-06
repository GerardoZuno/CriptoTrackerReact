import React, { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
font-family: 'Bebas Neue', cursive;
color: #FFF;
text-transform: uppercase;
font-weight: bold;
font-size: 2.4rem;
margin-top: 2rem;
display: block;

`
const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
`

const useMoneda = (label, stateInitial, MONEDAS) => {
  const [state, setState] = useState(stateInitial);

  const Seleccionar = () => (
    <>
      <Label >{label} </Label>
      <Select 
      onChange={(e) => setState(e.target.value)}
      value={state}
      >
        <option value="">--select</option>
        {MONEDAS.map(item =>(
          <option key={item.codigo} value={item.codigo}>{item.nombre}</option>
        ))}
        
      </Select>
    </>
  );
  //Retornar state, interfaz y func. que modifica el state
  return [state, Seleccionar, setState];
};

export default useMoneda;
