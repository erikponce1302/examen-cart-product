import React, {} from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Badge, Typography, Breadcrumbs } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link, useLocation } from 'react-router-dom';

const HeaderComponent = () => {
    const location = useLocation()
    const currentPath = location.pathname;
    const paths = currentPath.split('/');
    const {  quantityProducts } = useSelector(state => state.cart);

    return(
        <>
            <AppBar>
                    <Toolbar>
                            <Link key="home=link" to="/" style={{ textDecoration: 'none' }}>
                                <HomeIcon />
                            </Link>
                            <Typography variant="h3" >
                                Home
                            </Typography>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link 
                                color="inherit"
                                to="/"
                            >
                                Home
                            </Link>
                            { paths.includes("productDetail") ?
                                <Typography color="textPrimary">
                                    Product Details
                                </Typography>
                                :
                                null
                            }
                        </Breadcrumbs>
                        <Badge badgeContent={`${quantityProducts}`} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </Toolbar>
            </AppBar>
        </>
    )
}

export default HeaderComponent;