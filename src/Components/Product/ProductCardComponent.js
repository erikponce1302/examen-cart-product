import React from 'react';
import  { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import ProductImage from './ProductImageComponent';

const CardProduct = ({ product }) => {
    const {
        imgUrl,
        brand,
        price,
        model,
    } = product

    return(
        <>
        <div>
            <Link key={product.id} to={`productDetail/${product.id}`}>
                <ProductImage imageProduct={imgUrl} styleImage="Product-Image-Card "/>
            </Link>
            <Typography component="p">
                <b>Marca:</b> {brand} <b>Modelo:</b> {model } <b>Precion:</b> {price}
            </Typography>
        </div>
        </>
    )
}

export default CardProduct;