import * as React from 'react';
import { Component } from 'react';
import Product from './product';

export interface ProductOverViewProps {
    
}
 
export interface ProductOverViewState {
    
}
 
class ProductOverView extends React.Component<ProductOverViewProps, ProductOverViewState> {
    render() { 
        return ( 
            <div className="container">
                <div className="products-default products-cards products-tech">
                    <div className="row">
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProductOverView;