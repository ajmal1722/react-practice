import { useState, useEffect } from 'react'

const UseEffect = () => {

    const [val, setVal] = useState(0)
    const [color, setColor] = useState('')
    const [clearup, setClearup] = useState(false)

    useEffect(() => {
        setClearup(false)
        const id = setTimeout(() => {
            
            setClearup(true)
        }, val * 1000);

        console.log('state changed', val)

        return () => {
            clearTimeout(id)
        }
    }, [val])



    return (
        <>
            
            <div>
                <h3>useEffect</h3>
            </div>
            { clearup && val && (
                <div style={{background: 'gray', padding: '1rem', margin: '1rem'}}>
                    <h1>Clear up function worked</h1>
                    <h4>after {val} seconds </h4>
                </div>
            )
            }
            <div className='border' style={{ background: color }}>
                <button onClick={() => setColor('purple')}>
                    Purple
                </button>
                <button onClick={() => setVal(val - 1)}>
                    Decrement <span style={{ fontSize: '20px', marginLeft: '5px' }}>-</span>
                </button>
                <span style={{ fontSize: '20px', color: 'cyan' }}>
                    {val}
                </span>
                <button onClick={() => setVal(val + 1)}>
                    Increment <span style={{ fontSize: '20px', marginLeft: '5px' }}>+</span>
                </button>
                <button onClick={() => setColor('orange')}>
                    Orange
                </button>
            </div>
        </>
    )
}

export default UseEffect
