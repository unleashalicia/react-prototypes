import React from 'react';
import Table from './table';



const App = () => {
    const students = [{name: 'Lou', course: 'Hulk', grade: 85}, {name: 'Bond', course: 'espionage', grade: 75}, {name: 'Trebeck', course: 'Jeopardy', grade: 100}];

    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    );
};

export default App;

