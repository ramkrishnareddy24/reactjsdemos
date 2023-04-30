import React from 'react'



const LoginForm = ({onLogin}) => {

    const emailRef = React.useRef();
    const passRef = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
       const email = emailRef.current.value
       const pass = passRef.current.value
       console.log(email+' '+pass);
       alert(email+' '+pass);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='email'>Email : </label>
                <input id="email" type="text" ref={emailRef}/>
            </div>
            <div>
                <label htmlFor='pass' >Password : </label>
                <input id="password" type="password" ref={passRef}/>
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm