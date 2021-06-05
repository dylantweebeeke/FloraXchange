import * as React from 'react';
import { Component } from 'react';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import axios from 'axios';
import Product from './product';

export interface IValues{
    [key: string]: any;
}

export interface IFormState{
    ID: number,
    product: any,
    values: IValues[],
    isReady: boolean
}

 
class ViewProduct extends React.Component<RouteComponentProps<any>, IFormState> {

    constructor(props: RouteComponentProps){
        super(props);
        this.state = {
            ID: this.props.match.params.ID,
            product: {},
            values: [],
            isReady: false
        }
    }

    public componentWillMount(): void{
        console.log(`https://api.floraxchange.nl/artikel?${this.state.ID}`)
        axios
        .get(`https://api.floraxchange.nl/artikel?${this.state.ID}`)
        .then(data => { 
            this.setState({product: data.data})
            this.setState({isReady: true})
        });
    }

    render() {
        const product = this.state.product; 

        return ( 
            <div className="product-info">
            {this.state.isReady &&
            <div className="container">
                
                <div className="row">
                    <div className="col-md-6">
                    <img src={product.Fotos[0].UrlThumb360} />
                </div>
                
                <div className="col-md-6">
                    <h2>{product.Naam}</h2>
                    <p>Potmaat: {product.Potmaat}</p> 
                    <p>Hoogte: {product.Hoogte}</p>
                    <p>Minimale planthoogte inclusief pot: {product.Eigenschappen[1].Waarde}</p>
                    <p>Minimale aantal stekken/planten per pot: {product.Eigenschappen[2].Waarde}</p>
                    <p>Combinatie hoogte: {product.Eigenschappen[3].Waarde}</p>
                    <p>Transport hoogte: {product.Eigenschappen[4].Waarde}</p>
                    <p>Plant vorm: {product.Eigenschappen[5].Waarde}</p>
                </div>
                </div>
                <Link className="btn btn-secondary" to={'/'}>Terug</Link>
            </div>
            }
            </div>
            
         );
    }
}
 
export default withRouter(ViewProduct);