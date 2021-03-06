import React from "react";
import styled from "@emotion/styled";
import axios from 'axios'
import imagen from "./cryptomonedas.png";
import Form from "./components/Form";
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner";


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

const App = () => {

  const [moneda, setMoneda] = React.useState('')
  const [CriptoMoneda, setCriptoMoneda] = React.useState('')
  const [resultado, setResultado] = React.useState({})
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {

    if(moneda === '') return
    console.log('Cotizando...')

    const cotizacion = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${CriptoMoneda}&tsyms=${moneda}`
      const result = await axios.get(url)
      setResultado(result.data.DISPLAY[CriptoMoneda][moneda])
    }

    cotizacion()

  }, [moneda, CriptoMoneda])


  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="imagen crypto" />
      </div>
      <div>
        <Heading >
          Cotiza Criptomonedas al Instante
        </Heading>


        <Form 
        setMoneda={setMoneda} 
        setCriptoMoneda={setCriptoMoneda}
        setLoading={setLoading}/>
        {
          loading && <Spinner />
        }

        { 
          !loading ? <Cotizacion resultado={resultado}/> : null
        }
        
      </div>
    </Contenedor>
  );
};

export default App;
