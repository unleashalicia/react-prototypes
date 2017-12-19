import React from 'react';
import Welcome from './welcome';
import {Route} from 'react-router-dom';
import Nav from './nav';
import OurMacarons from './our_macarons';

const App = () => {
    return (
        <div>
            <Nav />
            <Route exact path="/" component={Welcome}/>
            <Route path="/our-macarons" component={OurMacarons} />
        </div>
    )
};

export default App;
