import { useReducer } from 'react'

function handleReducer (prevState, action) {
    switch (action.type) {
        case 'increment':
            return {
                ...prevState,
                value: prevState.value + 1
            };
        case 'decrement':
            return {
                ...prevState,
                value: prevState.value - 1
            };
        case 'cyan':
            return {
                ...prevState,
                color: 'cyan'
            };
        case 'green':
            return {
                ...prevState,
                color: 'green'
            }
    
        default:
            return prevState;
    }
}

const UseReducer = () => {
    const initialState = {
        value: 0,
        color: 'purple'
    }

    const [state, dispatch] = useReducer(handleReducer, initialState)

    return (
        <> 
            <div>
                <h3>useReducer</h3>
            </div>
            <div className='border' style={{background: state.color}}>
                <button onClick={() => dispatch({type: 'cyan'})}>
                    Cyan
                </button>
                <button onClick={() => dispatch({type: 'decrement'})}>
                    Decrement <span style={{ fontSize: '20px', marginLeft: '5px' }}>-</span>
                </button>
                <span style={{ fontSize: '20px', color: 'red' }}>
                    {state.value}
                </span>
                <button onClick={() => dispatch({type: 'increment'})}>
                    Increment <span style={{ fontSize: '20px', marginLeft: '5px' }}>+</span>
                </button>
                <button onClick={() => dispatch({type: 'green'})}>
                    Green
                </button>
            </div>
        </>
    )
}

export default UseReducer
