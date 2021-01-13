import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Marketing from './pages/marketing';
import Tecnologia from './pages/Tecnologia';


const Routes = () => {
    return(
            <BrowserRouter>
            <Switch>
                <Route exact path="/Marketing" component={Marketing} />
                <Route exact path="/Tecnologia" component={Tecnologia} />
            </Switch>
            </BrowserRouter>       
    )   
}


export default Routes;