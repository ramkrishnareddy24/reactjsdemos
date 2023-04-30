import React from 'react';

const LoginFormControlled = ({ onLogin }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(email + ' ' + password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email : </label>
          <input id='email' type='text' value={email} onChange={handleEmail}/>
        </div>
        <div>
          <label htmlFor='pass'>Password : </label>
          <input id='password' type='password' value={password} onChange={handlePassword}/>
        </div>
        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginFormControlled;
