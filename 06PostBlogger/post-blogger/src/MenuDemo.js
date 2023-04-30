import React from 'react';
//import ReactDOM from 'react-dom';

function MenuDemo(props){
    const number =[100,200,300,400,500];

   // const list = ;
    const newNum =number.map((num)=>{
        return<li>{num}</li>
    });
    return (
        <ul>{newNum}</ul>
    );
}





export default MenuDemo;