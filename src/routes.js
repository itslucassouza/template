import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Marketing from './pages/Marketing';
import Technology from './pages/Technology';

const Routes = () => {
    return (
        <Switch>
            <Route path="/marketing" component={Marketing} />
            <Route path="/tech" component={Technology} />
        </Switch>
    );
};

export default Routes;
