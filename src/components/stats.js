import React from 'react';
import Time from './format_time';

const Stats = props => {
    console.log('PROPS:', props);
    return (
        <div className="jumbotron">
            <h1>Lap Times</h1>
            <Time elapsed={props.laps}/>
        </div>
    )
}

export default Stats;