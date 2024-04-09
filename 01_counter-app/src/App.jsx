import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0); //  behind the seen count will be declared as the as let count so don't get confused with the const 
 

  //function to handle the counter behaviour 
  const increaseCount=()=>{
    setCount(count+1);

    /*Start:This below lines of code will increase the final count as 1 only not by 5 */
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    /*End: */

    /*Start: This below lines of code will work as expected ie it will increase the count by 5*/
    // setCount(prevCount=>prevCount+1);
    // setCount(prevCount=>prevCount+1);
    // setCount(prevCount=>prevCount+1);
    // setCount(prevCount=>prevCount+1);
    // setCount(prevCount=>prevCount+1);
    /*End: */

    console.log("increased",count);    /*Note here count will be pointing to the very first value when clicked on button because it will takes the values from the que*/
 
  }

  const decreaseCount=()=>{
    setCount(count-1);
    
    console.log("decreased",count);
  }

  return (
    <>
     <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Counter App</h1>
     <p className='pb-4'>Current Count : {count} </p>

     <button 
     onClick={increaseCount}
     className='class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400'
     >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      +
      </span>
      
    </button>
     
     <button
      onClick={decreaseCount}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          -
        </span>
    </button>
    </>
  )
}

export default App
