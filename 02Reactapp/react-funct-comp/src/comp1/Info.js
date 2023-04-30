import React from 'react';

function Logo() {
  return (
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' 
    alt=''
    style={{width: '100px', height:'100px'}}
    />
  );
};

const Info = (props) => {
  return (
    <div className='info'>
      <h2>Address : {props.address}</h2>
      <h2>Skill : {props.skill}</h2>
      <Logo/>
    </div>
  );
};

export default Info;
