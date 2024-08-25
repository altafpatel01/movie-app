import React , {useState} from 'react'

function Counter() {
   const [count , asetCount] = useState(0)
   function IncrementCounter(){
    asetCount(count+1)
   }
   function DecrementCounter(){
    asetCount(count-1)
   }
  return (
    
    <div className='border bg-red-700 w-fit'>
    <h1>This is a counter : {count}</h1>
    <button className='border bg-gray-400 p-2 rounded-md' onClick={IncrementCounter}>Increment</button>
    <button className='border bg-gray-400 p-2 rounded-md' onClick={DecrementCounter}>Decrement</button>
    </div>
  );
}

export default Counter;