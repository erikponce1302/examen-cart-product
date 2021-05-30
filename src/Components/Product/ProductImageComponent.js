import React from 'react';
import "../../Public/Style/ProductImage.css"

const ProductImage = ({imageProduct, styleImage, altName}) => {
    
    return(
        <>
            <img className={styleImage} src={imageProduct} alt={altName} title={altName} />
        </>
    )
}

export default ProductImage;