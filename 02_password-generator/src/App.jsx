import { useCallback,useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
    const [length,setlength] = useState(8);
    const [numAllowed,setNumAllowed] = useState(true)
    const [charAllowed,setcharAllowed] = useState(true)
    const [password,setPassword] = useState('');

    /*code to copy the text to clipboard*/
    const passwordref = useRef(null);
    const copyToClipBoard = useCallback(()=>{
        passwordref.current?.select();
        passwordref.current?.setSelectionRange(0,99);
        window.navigator.clipboard.writeText(password)
    },[password])

    /*Generate password*/
    const passwordGenerator = useCallback(()=>{
      let pass ='';
      let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

      if(numAllowed) str+='0123456789';
      if(charAllowed) str+='!@#$%^&*()-_+=<>?{}[]|~';

      for(let i=1; i<=length;i++)
      {
        let char = Math.floor(Math.random()*str.length)
        pass += str.charAt(char);
      }
      
      setPassword(pass);
      
    },[length,numAllowed,charAllowed,setPassword]);
  
  /*to make the chagnes updated in ui*/
  useEffect(()=>{
    passwordGenerator();
  },[length,numAllowed,charAllowed,passwordGenerator]);


  return (
      <div className='w-full max-w-md mx-auto shadow-md  rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            className='outline-none w-full py-1 px-3'
            type='text'
            value={password}
            placeholder='password'
            readOnly 
            ref ={passwordref}
          />
          <button
            className='outline-none bg-blue-700 text-white  px-3 py-0.5 shrink-0'
            onClick={copyToClipBoard}
          >
          Copy Text</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{
                setlength(e.target.value)
              }}
            />
            <label>Range:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
              type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={()=>{
                setNumAllowed((prev)=>!prev);
              }}
             />
             <label htmlFor="numberInput">Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
             type="checkbox"
             defaultChecked={charAllowed}
             id='characterInput'
             onChange={()=>{
               setcharAllowed((prev)=>!prev)
             }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div> 
      </div>
  )
}

export default App
