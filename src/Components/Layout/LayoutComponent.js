import React, {} from 'react';
import Header from '../Header/HeaderComponent';

const LayoutComponent = ({children}) => {
    return(
        <>
            <Header />
                {children}
        </>
    )
}

export default LayoutComponent;