import * as React from 'react';
import { Component } from 'react';
import { BrowserRouter, Link, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import Navigation from './navigation';
import Product from './product';
import ProductOverView from './productOverview';
import Home from './productOverview'

 
class View extends React.Component<RouteComponentProps<any>> {
    render() { 
        return(
            <div>
                <Navigation />
                <Switch>
                    <Route path={'/'} exact component={ProductOverView} />
                </Switch>
            </div>
        );
    }
}
 
export default withRouter(View);