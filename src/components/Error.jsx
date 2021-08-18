import React from 'react'
import styled from "@emotion/styled";

const MensajeError = styled.p`
 background-color: #b7332c;
 padding: 1rem;
 color: #FFF;
 font-size: 30px;
 text-transform: uppercase;
 font-weight: bolder;
 text-align: center;
 font-family: inherit;


`

const Error = ({mensaje}) => {
    return (
        <MensajeError>
            {mensaje}
        </MensajeError>
    )
}

export default Error
