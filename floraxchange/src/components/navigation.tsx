import * as React from 'react';
import { Component } from 'react';

export interface NavigationProps {
    
}
 
export interface NavigationState {
    
}
 
class Navigation extends React.Component<NavigationProps, NavigationState> {
    render() { 
        return ( 
            <nav className="navbar navbar-dark navigation">
                <span className="navbar-brand mb-0 h1">FloralXchange</span>
            </nav>
        );
    }
}
 
export default Navigation;