import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import Layout from '../../Components/Layout/LayoutComponent';
import ProductImage from '../../Components/Product/ProductImageComponent';
import { getProductById, cleanProductById } from '../../Redux/actions/ProductAction';
import ProductDescription from '../../Components/Product/ProductDescriptionComponent'
import ProductActions from '../../Components/Product/ProductActionsComponent'

const ProductDetailView = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    
    const { productDetail } = useSelector(state => state.product)
    const {
        imgUrl,
        model,
        options
    } = productDetail;

    useEffect(() => {
        dispatch(getProductById(id))
        return () => {
            dispatch(cleanProductById())
        }
    }, [ dispatch, id ])
    
    return(
        <>
            <Layout>
                { productDetail.id && productDetail.id !== "" ?
                    <>
                        <ProductImage imageProduct={imgUrl} styleImage="Product-Image-Detail" altName={model}/>
                        <ProductDescription product={productDetail}/>
                        <ProductActions options={options} productId={id} />
                    </>
                    :
                    null
                }
            </Layout>
        </>
    )
}

export default ProductDetailView;