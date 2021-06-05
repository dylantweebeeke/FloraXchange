import * as React from 'react';
import { Component } from 'react';
import Navigation from './navigation';
import Product from './product';
import ProductOverView from './productOverview';

export interface ViewProps {
    
}
 
export interface ViewState {
    
}
 
class View extends React.Component<ViewProps, ViewState> {
    render() { 
        return (
            <div>  
                <Navigation />
                <ProductOverView />
            </div>
        );
    }
}
 
export default View;