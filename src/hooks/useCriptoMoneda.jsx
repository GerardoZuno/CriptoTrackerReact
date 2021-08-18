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

const useCriptoMoneda = (label, stateInitial, listCripto) => {

  console.log(listCripto)  
  const [cripto, setCripto] = useState(stateInitial);

  const SeleccionarCripto = () => (
    <>
      <Label >{label} </Label>
      <Select 
      onChange={(e) => setCripto(e.target.value)}
      value={cripto}
      >
        <option value="">--select</option>
         {listCripto.map(item =>(
          <option key={item.CoinInfo.Id} name={item.CoinInfo.Name} value={item.CoinInfo.Name}>{item.CoinInfo.FullName}</option>
        ))}*/
       
        
      </Select>
    </>
  );
  //Retornar state, interfaz y func. que modifica el state
  return [cripto, SeleccionarCripto, setCripto];
};

export default useCriptoMoneda;

