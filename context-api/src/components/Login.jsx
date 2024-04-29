import { useState } from 'react'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmision = () => {

    }

    return (
        <div>
            <h2>User Login</h2>
            <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            />
            {'  '}
            <input 
            type="text" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            />
            <button onClick={handleFormSubmision}>Submit</button>
        </div>
    )
}

export default Login
