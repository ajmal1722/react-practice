import { useState } from 'react'

const UseState = () => {

    const [count, setCount] = useState(0);

    

    return (
        <div>
            <h3>useState</h3>
            <button>-</button>
            <span>{ count }</span>
            <button>+</button>
        </div>
    )
}

export default UseState
