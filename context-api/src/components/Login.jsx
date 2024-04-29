import { useState, useContext } from 'react'
import UserContext from '../context/userContext';

const Login = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const { setUser } = useContext(UserContext);

    const handleFormSubmision = (e) => {
        e.preventDefault();
        console.log('button clicked...')
        setUser({username, email})
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            />
            <button onClick={handleFormSubmision}>Submit</button>
        </div>
    )
}

export default Login
