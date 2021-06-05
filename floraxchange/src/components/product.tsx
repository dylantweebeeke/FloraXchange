import * as React from 'react';
import { Component } from 'react';

export interface ProductProps {
    
}
 
export interface ProductState {
    
}
 
class Product extends React.Component<ProductProps, ProductState> {
    render() { 
        return ( 
            <div className="col-md-6">
                <div className="block product no-border z-depth-2-top z-depth-2--hover">
                     <div className="block-image">
                        <a href="#">
                            <div className="wrapper">
                                <img src="https://floraxchange.blob.core.windows.net/artikelen/1547769_v_t5.jpg" alt="productImage"/>
                                <div className="textBlock">
                                    <div className="Text">
                                        Product bekijken
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Product;