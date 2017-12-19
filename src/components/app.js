import React from 'react';
import Welcome from './welcome';
import {Route} from 'react-router-dom';
import Nav from './nav';
import OurMacarons from './our_macarons';
import GiftsParties from './gifts_parties';
import Contact from './contact';

const App = () => {
    return (
        <div>
            <Nav />
            <Route exact path="/" component={Welcome}/>
            <Route path="/our-macarons" component={OurMacarons} />
            <Route path="/gifts-and-parties" component={GiftsParties} />
            <Route path="/contact" component={Contact} />
        </div>
    )
};

export default App;
