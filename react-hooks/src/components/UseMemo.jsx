import { useState } from 'react'

const UseMemo = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const isEven = () => {
        let i = 1;
        while (i < 500000000) i++
        return counterOne % 2 === 0
    }

    console.log('component re-rendered', counterOne, counterTwo)

    return (
        <div>
            <h3>useMemo</h3>
            <div>
                <button onClick={() => setCounterOne(counterOne + 1)}>
                    Increment One
                </button>
                <span>
                    { counterOne }
                </span>
                <span style={{ color: 'cyan', fontSize: '20px', marginLeft: '1rem'}}>
                    { isEven() ? 'Even' : 'Odd'}
                </span>
            </div>
            <div>
                <button onClick={() => setCounterTwo(counterTwo + 1)}>
                    Increment two
                </button>
                <span>
                    { counterTwo }
                </span>
            </div>
        </div>
    )
}

export default UseMemo
