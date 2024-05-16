import { useState } from 'react';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseMemo from './components/UseMemo';
import UseRef from './components/UseRef';
import UseReducer from './components/UseReducer';
import './App.css';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>React Hooks</h1>
            <UseState/>
            <UseEffect/>
            <UseMemo/>
            <UseRef/>
            <UseReducer/>
        </>
    )
}

export default App
