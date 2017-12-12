import React from 'react';
import Time from './format_time';

const Stats = props => {
    // let num = 0;
    // num++;
    return (
        <div>
            <h2 className="text-center">
                {/*{num}*/}
                <Time className="text-center" elapsed={props.laps}/>
            </h2>
        </div>
    )
}

export default Stats;