import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from "@material-ui/core";
import CardProduct from '../../Components/Product/ProductCardComponent';
import Search from '../../Components/Search/Search';
import { getAllProducts } from '../../Redux/actions/ProductAction';
import Layout from "../../Components/Layout/LayoutComponent"

let HomeView = () => {
    const dispatch = useDispatch();
    const { products, productFilter } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [ dispatch ])

    return(
        <>
            <Layout>
                <Search />
                <Grid key="grid=product" container spacing={4} justify="center" >
                    { productFilter.length === 0 ?
                        products.map( product => { 
                            return (
                                <Grid key={product.id} item xs={12} sm={3}>
                                    <CardProduct key={product.id} product={product} />
                                </Grid>
                            )
                        })
                        :
                        productFilter.map( product => { 
                            return (
                                <CardProduct key={product.id} product={product} />
                            )
                        })
                    }
                </Grid>
            </Layout>
        </>
    )
}

export default HomeView;
