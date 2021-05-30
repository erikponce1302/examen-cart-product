import React from 'react'

const ProductDescription = ({ product }) => {

    const {
        brand,
        battery,
        cpu,
        displayResolution,
        model,
        os,
        price,
        ram,
        primaryCamera,
        secondaryCmera,
        dimentions,
        weight
    } = product;

    const countQuantityCamera = () =>{
        let total = 0;
        if ( primaryCamera.length > 0 ) {
            total = total + 1;
        }

        if ( secondaryCmera.length > 0 ) {
            total = total + 1;
        }
        return total
    }

    return (
        <ul style={{listStyle: 'none'}}>
            <li className="" > {`Marca: : ${brand}`} </li>
            <li className="" > {`Modelo: : ${model}`} </li>
            <li className="" > {`Precio: : ${price}`} </li>
            <li className="" > {`CPU: : ${cpu}`} </li>
            <li className="" > {`RAM: : ${ram}`} </li>
            <li className="" > {`Sistema Operativo: : ${os}`} </li>
            <li className="" > {`Resolucion de pantalla: ${displayResolution}`} </li>
            <li className="" > {`Bateria: : ${battery}`} </li>
            <li className="" > {`Camaras: : ${countQuantityCamera()}`} </li>
            <li className="" > {`Dimensiones: : ${dimentions}`} </li>
            <li className="" > {`Peso: : ${weight === "" ? "-" : weight} `} </li>
        </ul>
    )
}

export default ProductDescription;