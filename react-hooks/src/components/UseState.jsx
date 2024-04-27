import { useState } from 'react'

const UseState = () => {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('Type Something...');

    const countIncrement = () => {
        setCount(count + 1)
    };

    function countDecrement () {
        setCount(count - 1);
    }

    const onChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    }

    return (
        <>
            <div>
                <h3>useState</h3>
                <button onClick={countDecrement}>-</button>
                <span>{ count }</span>
                <button onClick={countIncrement}>+</button>
            </div>

            <div className='second'>
                <input type="text"placeholder='Type Something...' onChange={onChange}  />
                <p>{ inputValue }</p>
            </div>
        </>
    )
}

export default UseState
