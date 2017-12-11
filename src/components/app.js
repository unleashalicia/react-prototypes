import React from 'react';
import Stopwatch from './stopwatch';
import Stats from './stats';

const App = () => (
    <div className="container">
        <h1 className="text-center">Stopwatch</h1>
        <Stopwatch/>
        <h1 className="text-center">Best Laps</h1>
        <Stats/>
    </div>
)

export default App;