import React, { useState } from 'react';

function LoginForm({handleSubmit}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const payload = {
        "username":username,
        "password":password

    }
    const handleSubmitDecorator = (e) => {
        e.preventDefault();
        handleSubmit(payload);
    };

    return (
        <div className='loginForm'>
            <h3>Login</h3>
            <input 
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
            />
            <button onClick={handleSubmitDecorator}>Login</button>
        </div>
    );
}
export default LoginForm