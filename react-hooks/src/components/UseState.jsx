import { useState } from 'react'

const UseState = () => {

    const [count, setCount] = useState(0);

    const countIncrement = () => {
        setCount(count + 1)
    };

    function countDecrement () {
        setCount(count - 1);
    }

    return (
        <div>
            <h3>useState</h3>
            <button onClick={countDecrement}>-</button>
            <span>{ count }</span>
            <button onClick={countIncrement}>+</button>
        </div>
    )
}

export default UseState
