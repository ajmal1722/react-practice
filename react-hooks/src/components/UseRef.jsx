import {  useEffect, useRef } from 'react'

const UseRef = () => {

    const inputRef = useRef(null)

    useEffect(() => {
        // When page reload all focus will be on the input 
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <h3>useRef</h3>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default UseRef
