import * as React from 'react';
import { Component } from 'react';
import {Link, RouteComponentProps} from 'react-router-dom';
import Product from './product';
import axios from 'axios';

interface  IState{
    products: any[];
}
 
class ProductOverView extends React.Component<RouteComponentProps, IState > {
    constructor(props: RouteComponentProps){
        super(props);
        this.state = {products: []}
    }

    public componentDidMount(): void{
        axios
        .get('https://api.floraxchange.nl/artikel?relatieid=215')
        .then(data => {
            this.setState({products: data.data})
        })
    }

    render() { 
        const products = this.state.products;

        return ( 
            <div className="container">
                {products.length === 0 &&(
                    <div className="text-center">
                        <h2>Er zijn momenteel geen producten beschrikbaar</h2>
                    </div>
                )}
                <div className="products-default products-cards products-tech">
                    <div className="row">
                        {products && products.map(product => 
                            <div key={product.ID} className="col-md-6">
                                <div className="block product no-border z-depth-2-top z-depth-2--hover">
                                    <div className="block-image">
                                        <a href="#">
                                            <div className="wrapper">
                                                <img src={product.Fotos[0].UrlThumb600} alt="productImage"/>
                                            <div className="textBlock">
                                                <div className="Text">
                                                    Product bekijken
                                                </div>
                                            </div>
                                        </div>
                                        </a>
                                        <div className="block-body text-center">
                                        <h3 className="heading heading-5 strong-600 text-capitalize">
                                            <Link to={`viewProduct/ID=${product.ID}`}>
                                                {product.Naam}
                                            </Link>
                                        </h3>
                                        <p className="product-description">
                                            Potmaat: {product.Potmaat} <br></br>
                                            Hoogte: {product.Hoogte}

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ProductOverView;