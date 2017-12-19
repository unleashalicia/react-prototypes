import React from 'react';
import Welcome from './welcome';
import {Route} from 'react-router-dom';

const App = () => {
    return (
        <div>
            <h1>Routing!</h1>
            <Route exact path="/" component={Welcome}/>
        </div>
    )
};

export default App;
