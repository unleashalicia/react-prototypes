import React, {Component} from 'react';
import App from './app';

const Table = props => {
        props.data //start mapping here.

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
            <tr>
                <td>Alicia</td>
                <td>Math</td>
                <td>90</td>
            </tr>
            <tr>
                <td>Brian</td>
                <td>Science</td>
                <td>90</td>
            </tr>
            <tr>
                <td>Lori</td>
                <td>English</td>
                <td>95</td>
            </tr>
            </tbody>
        </table>
    </div>)
};

export default Table;