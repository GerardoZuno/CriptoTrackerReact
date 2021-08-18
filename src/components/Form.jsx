import React, {useEffect, useState} from 'react'
import styled from "@emotion/styled";
import useMoneda from '../hooks/useMoneda'
import useCriptoMoneda from '../hooks/useCriptoMoneda'
import axios from 'axios';
import Error from './Error';


const Boton = styled.input`
margin-top: 20px;
font-weight: bold;
font-size: 20px;
padding: 10px;
background-color: #66a2fe;
border: none;
width: 100%;
border-radius: 10px;
color: #FFFFFF;
transition: background-color .3s ease ;

&:hover { 
    background-color: #326AC0;
    cursor: pointer;
}

`

function Form({setMoneda, setCriptoMoneda}) {

    const [listCripto, setListCripto] = useState([])
    const [error, setError] = useState(false)

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXM', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'EURO' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }



    ]

    // state, Seleccionar, setState
    const [moneda, Seleccionar] = useMoneda('Elige tu Moneda', '', MONEDAS)
    const [cripto, SeleccionarCripto] = useCriptoMoneda('Elige tu Criptomoneda', '', listCripto)

    useEffect(() =>{
       const consultaApi = async () => {
          const urlApi = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'  
          const response = await axios.get(urlApi)
          setListCripto(response.data.Data)
       }
       consultaApi()
    }, [])

    const cotizarMoneda = (e) => {
        e.preventDefault()
        if(!moneda.trim() || !cripto.trim()){
            setError(true)
            return
        }
        console.log(moneda)
        setError(false)
        setMoneda(moneda)
        setCriptoMoneda(cripto)
    }

    return (

        <form onSubmit={cotizarMoneda}>

            { 
               error ? (
                   <Error mensaje="Todos los campos obligatorios"/>
               ) :null
            }

            <Seleccionar />
            <SeleccionarCripto />
            <Boton
            type="submit"
            value="Calcular"
             />
        </form>
    )
}

export default Form
