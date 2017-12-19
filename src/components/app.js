import React from 'react';
import Welcome from './welcome';
import {Route} from 'react-router-dom';
import Nav from './nav';

const App = () => {
    return (
        <div>
            <Nav />
            <Route exact path="/" component={Welcome}/>
        </div>
    )
};

export default App;
