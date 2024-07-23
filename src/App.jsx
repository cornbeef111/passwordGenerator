import './App.css'
import React, { useCallback } from 'react'

function App() {

  const [length, setLength] = React.useState(8)
  const [numberAllowed, setNumberAllowed] = React.useState(false)
  const [charAllowed, setCharAllowed] = React.useState(false)
  const [password, setPassword] = React.useState('')

  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed){
      str += '0123456789'
    }
    if(charAllowed){
      str += ''
    }
  })

  return (
    <div className='w-full max-w-md mx-auto shadow-lg bg-gray-800 px-4 py-3 my-8 rounded-lg text-orange-500'>
         <h1 className='text-3xl text-center font-bold my-3 text-white'> Password Generator</h1>
         <div className='flex shadow rounded-lg mb-4 overflow-hidden'>
          <input type='text'
          value={password}
          placeholder='Password'
          readOnly
          className='w-full outline-none px-3 py-1'
          />
          <button className='bg-blue-700 px-3 py-0.5 text-white'>Copy</button>
         </div>

         <div className='flex gap-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' 
            min={6}
            max={100}
            value={length}
            name=''
            id=''
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor=''> Length: {length} </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
            defaultChecked = {numberAllowed}
            onChange={() => {
              setNumberAllowed(prev => !prev)
            }}
            />
            <label htmlFor='number'> Numbers </label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
            defaultChecked = {charAllowed}
            onChange={() => {
              setCharAllowed(prev => !prev)
            }}
            />
            <label htmlFor='charInput'> Character </label>
          </div>
         </div>
    </div>
  )
    
}

export default App
