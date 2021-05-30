import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
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
                        <Grid key="grid-detail-product" container spacing={4} direction="row" justify="center" alignItems="center">
                            <Grid key="image-product" item xs={12} sm={6}>
                                <ProductImage imageProduct={imgUrl} styleImage="Product-Image-Detail" altName={model}/>
                                </Grid>
                            <Grid key="description-product" item xs={12} sm={6}>
                                <ProductDescription product={productDetail}/>
                                <ProductActions options={options} productId={id} />
                            </Grid>
                        </Grid>
                    </>
                    :
                    null
                }
            </Layout>
        </>
    )
}

export default ProductDetailView;