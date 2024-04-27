import { useState } from 'react';
import UseState from './components/UseState';
import './App.css';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>React Hooks</h1>
            <UseState/>
        </>
    )
}

export default App
