import { useState, useEffect } from 'react'

const UseEffect = () => {
    
    const [val, setVal] = useState(0)
    const [color, setColor] = useState('white')

    useEffect(() => {
        console.log('state changed', val)
    })

    

    return (
       <>
            <div>
                <h3>useEffect</h3>
            </div>
            <div className='border' style={{background: color}}>
                <button onClick={() => setColor('purple')}>
                    Purple
                </button>
                <button onClick={() => setVal(val - 1)}>
                    Decrement <span style={{fontSize: '20px', marginLeft: '5px'}}>-</span>
                </button>
                <span style={{fontSize: '20px', color: 'cyan'}}>
                    { val }
                </span>
                <button onClick={() => setVal(val + 1)}>
                    Increment <span style={{fontSize: '20px', marginLeft: '5px'}}>+</span>
                </button>
                <button  onClick={() => setColor('orange')}>
                    Orange
                </button>
            </div>
       </> 
    )
}

export default UseEffect
