import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Marketing from './pages/Marketing';
import Technology from './pages/Technology';
import Rh from './pages/RH';

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/marketing" component={Marketing} />
            <Route path="/tech" component={Technology} />
            <Route path="/rh" component={Rh} />
        </Switch>
        </BrowserRouter>
    );
};

export default Routes;
