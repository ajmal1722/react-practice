import { useState } from 'react'
import './App.css'

function App() {
  const [inputVal, setInputVal] = useState('');
  const [todo, setTodo] = useState(['sample']);

  function handleSubmit (e) {
    e.preventDefault();

    setTodo([...todo, inputVal])

    setInputVal('')
  }
  return (
    <>
      <h2>To-Do</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type='submit'>
           Submit
        </button>
      </form>
      <div>
        {
          todo.map((item, index) => {
            return <p key={index}>{item}</p>
          })
        }
      </div>
    </>
  )
}

export default App
