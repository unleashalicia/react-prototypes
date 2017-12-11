import React, {Component} from 'react';
import App from './app';

const Table = props => {
    const tableRows = props.data.map((value, index)  => (

       <tr key={index}>
           <td>
               {value.name}
           </td>
           <td>
               {value.course}
           </td>
           <td>
               {value.grade}
           </td>
       </tr>
        )
    );

    return (
    <div>
        <table className="table">
            <thead className="thead-inverse">
            <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    </div>)
};

export default Table;