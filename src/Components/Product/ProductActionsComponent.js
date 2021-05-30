import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputLabel, Button } from '@material-ui/core';
import { addProductToCart } from '../../Redux/actions/CartAction';

const ProductActions = ({options, productId}) => {
    const dispatch = useDispatch()
    const [color, setColor] = useState("");
    const [storage, setStorage] = useState("");

    const {
        colors,
        storages
    } = options;

    const validatePreferences = () => {
        if ( color !== "" &&  storage !== "" ) {
            return true
        }
         return false;
    }

    const addProduct = (productId) => {
        const body = {
            id: productId,
            colorCode: color,
            storageCode: storage
        }
        if (validatePreferences()) {
            dispatch(addProductToCart(body))
        }
    }

    useEffect(() => {
        setColor(colors[0].code)
        setStorage(storages[0].code)
    }, [ colors, storages])

    return(
        <>
            <InputLabel>Almacenamiento</InputLabel>
            { storages[0].code !== "" ?
                <select
                    key="select-storage"
                    defaultValue={storage}
                    onChange={ (e) => setStorage(e.target.value)}
                >
                    {
                        storages.map( storage => {
                            return (
                                <option 
                                    key={storage.code}
                                    value={storage.code}
                                >
                                    {storage.name}
                                </option>
                            )
                        })
                    }
                </select>
                :
                null
            }

            <InputLabel>Colores</InputLabel>
            { colors[0].code !== "" ?
                <select
                    key="select-color"
                    defaultValue={color}
                    onChange={ (e) => setColor(e.target.value)}
                >
                    {
                        colors.map( color => {
                            return (
                            <option
                                key={color.code}
                                value={color.code}
                            >
                                {color.name}
                            </option>
                            )
                        })
                    }
                </select>
                :
                null
            }

            <Button color="primary" onClick={() => addProduct(productId)}>Agregar Producto</Button>
        </>
    )
}

export default ProductActions;