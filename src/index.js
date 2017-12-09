import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => Math.floor(Math.random()*1000)+1;

// function luckyNumber(){
//     const randomNumber = Math.floor(Math.random()*1000)+1;
//     return randomNumber;
// }

const user = {
    name: "Alicia",
    luckyNumber: luckyNumber()
};

const Greeting = props => {
    let name = props.person.name;
    let luckyNumber = props.person.luckyNumber;
    const newDiv = <div>
        <h1>Hello, {name}.</h1>
        <h2 className="text-muted">Your lucky number is {luckyNumber}!</h2>
    </div>;
    return newDiv;
};

// function Greeting(props){
//     let name = props.person.name;
//     let luckyNumber = props.person.luckyNumber;
//     const newDiv = <div>
//         <h1>Hello, {name}.</h1>
//         <h2 className="text-muted">Your lucky number is {luckyNumber}!</h2>
//     </div>;
//     return newDiv;
// }

ReactDOM.render(
    <Greeting person={user}/>,
    document.getElementById('root')
);
