import React from 'react'

const LogoBlanco = (props) => {
    const { width } = props;
    return (
        <div className="logoWrapper">
            <img src="https://raw.githubusercontent.com/NorsuisoSquad/Web/main/Imagenes/FondoNS.png" width={width ? width : 0} alt="NS Logo Blanco" />
        </div>
    )
}

export default LogoBlanco
