import { useState, useEffect } from 'react'

const UseEffect = () => {

    const [val, setVal] = useState(0)
    const [color, setColor] = useState('gray')
    const [cleanup, setcleanup] = useState(false)

    useEffect(() => {
        setcleanup(false)
        const id = setTimeout(() => {
            
            setcleanup(true)
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
            { cleanup && val && (
                <div style={{background: color, padding: '1rem', margin: '1rem'}}>
                    <h1>Clean up function is worked</h1>
                    <h4>after {val} seconds </h4>
                </div>
            )
            }
            <div className='border'>
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
