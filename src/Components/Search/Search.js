import React, { useState, useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";
import { setProductsFilter } from '../../Redux/actions/ProductAction';

const Search = () => {
    const dispatch = useDispatch();
    const [inputSearch, setInputSearch] = useState("");
    const { products, productFilter } = useSelector(state => state.product)
    
    const searchProduct = (event) => {
        setInputSearch(event.target.value);
    }

    
    
    useEffect(() => {

        const getProductsFilters = (text) => {
            let productFilters = []
            
            let regex = new RegExp(`^.*${text}.*$`, 'igm')
    
            products.forEach(product => {
                if ( regex.test(product.brand) || regex.test(product.model) ) {
                    productFilters.push(product);
                    
                }
            });
            return productFilters;
        }

        if ( inputSearch.length > 1 ) {
            dispatch(setProductsFilter(getProductsFilters(inputSearch)))
        } else {
            dispatch(setProductsFilter([]))
        }
    }, [ dispatch, inputSearch, products ])

    return(
        <>
            <div>
                <Input
                    id="input-search"
                    value={inputSearch}
                    onChange={(event) => searchProduct(event)}
                    endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
                    placeholder="Buscar Producto"
                />
                
                { inputSearch.length > 1  && productFilter.length === 0 ?
                    <Typography variant="h6" style={{color: 'red'}}>
                        No se encontraton resultados con la busqueda "{inputSearch}"
                    </Typography>
                    : 
                    null
                }
                
                
            </div>
        </>
    )
}

export default Search;
