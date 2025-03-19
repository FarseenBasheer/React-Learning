import React, {useState, useEffect} from 'react'

function Counter() {
  // useEffect(()=>{
  //   console.log('Mounting...') // This will work in mounting and updating
  //   return ()=>{
  //     console.log('Unmounting...') // This will work in unmounting and updating
  //   }
  // },[]) // We pass this empty array as second argument to useEffect to make it work only in mounting and unmounting and not in updating.
  // const [count, setCount] = useState(0)
  
  // On value update only the useEffect will work. that is shown below
  // const [count, setCount] = useState(0)
  // useEffect(()=>{
  //   console.log('Mounting...');
  //   console.log('Updating...'+count);
  // },[count]) // In array we give the value that we want to watch for update. If that value updates then useEffect will work. when th eobject which calls useEffect is updated then useEffect will work.
  
  // const [count, setCount] = useState(0)
  // useEffect(()=>{
  //   console.log('Mounting...');
  //   console.log('Updating...'+count);
  //   return()=>{
  //     console.log('Clean up...'+count); // This works first and then mounting and updating works.
  //   }
  // },[count]) 
  // return (
  //   <div className='App'>
  //     <button onClick={()=>setCount(count+1)}>Increment</button>
  //     <h1>Hello I am Component: {count}</h1>
  //   </div>
  // )

  // give 2 states
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(()=>{
    console.log('Mounting...');
    console.log('Count...'+count);
    console.log('Count2...'+count2);

    return()=>{
      console.log('Clean up...'+count);
    }
  },[count, count2]) 
  return (
    <div className='App'>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h1>Hello I am Component: {count}</h1>

      <button onClick={()=>setCount2(count2+1)}>Increment</button>
      <h1>Hello I am Component 2: {count2}</h1>
    </div>
  )
}

export default Counter
