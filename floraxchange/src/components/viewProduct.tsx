import * as React from 'react';
import { Component } from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import axios from 'axios';
import Product from './product';

export interface IValues{
    [key: string]: any;
}

export interface IFormState{
    ID: number,
    product: any,
    values: IValues[],
}

 
class ViewProduct extends React.Component<RouteComponentProps<any>, IFormState> {

    constructor(props: RouteComponentProps){
        super(props);
        this.state = {
            ID: this.props.match.params.ID,
            product: {},
            values: [],
        }
    }

    public componentDidMount(): void{
        console.log(`https://api.floraxchange.nl/artikel?${this.state.ID}`)
        axios
        .get(`https://api.floraxchange.nl/artikel?${this.state.ID}`)
        .then(data => { 
            this.setState({product: data.data})
        });
    }

    render() { 

        return ( 
            <div className="container">
                {this.state.product && 
                <div>
                    <h2>{this.state.product.Naam}</h2>
                    <p>Potmaat: {this.state.product.Potmaat}</p> 
                    <p>Hoogte: {this.state.product.Hoogte}</p>
                </div>
                }
            </div>
         );
    }
}
 
export default withRouter(ViewProduct);