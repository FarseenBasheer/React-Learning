// import './App.css';
// import Header from './components/Header';
// function App() { //component. only single component possible in return. So keep it inside a div
//   const data = 'Hello world';
//   const data1 = 'Hello world 1';
//   return (
//     <div>
//       <Header />
//       <Header data1={data1}/>
//       <h1 style={{color: 'red', backgroundColor:'blue'}}>Hello world</h1>
//       <p className='hello'>My first React app</p>
//       {/* <p className={loading 'hello'}>My first React app</p> */}
//       {/* Not completed, will learn this condition rendering in future */}
//       <p>This is sample {data}</p>
//       <Hello />
//       <Hello />
//       <br></br>
//     </div>
//   );
// }

// export default App;

// function Hello() {
//   return <h1 className='hello'>Hello</h1>
// } // We normally don't create like this. we create new folder and file and then bring it here. But for simplicity, we are doing this here.
// // OnClick also in CamelCase


// import React, { useState } from "react"; // Default export and named export
import { useState } from "react";
import Counter from "./Counter";
import Employee from "./Employee";
function App() {
  const [count, setCount] = useState(0); // useState =0 means the first default value. Return an array. Frst element is 0 here (count)
  // // Example:
  // const arr=[1,2,3,4];
  // const [j,k,l,m] = arr // Destructuring
  //     // 1,2,3,4

  // let count = 0;

  // function addCount(){
  //   count = count+1;
  //   console.log(count);
  // }
  // Converted the above function to arrow fucntion below
  const addCount = () => {
    // count = count+1;
    setCount(count + 1);
    // console.log(count);
  }
  // let obj = {
  //   title: "1st Counter",
  //   count
  // }

  // let obj = {
  //   title: "1st Counter",
  //   count
  //   ,
  //   place: "hello"
  // }

  let emp = [{ name: 'Farseen', age: 25 },
  { name: 'Fayees', age: 20 },
  { name: 'Fasil', age: 28 }
  ]

  return (
    <div className="App">
      <button onClick={addCount}>Add</button>
      {/* <button onClick={addCount()}>Add</button> //We should not give like this. It will be re-rendered(infinite loop) and errors will arise then. */}
      {/* In {}, everything will be js and will work as action. No function calling, only pass the function object. */}
      {/* <h1>Counter: {count}</h1>
      <Counter count={count} /> */}
      {/* <Counter title='1st Counter' count={count} /> */}
      {/* <Counter title='1st Counter' count={obj.count} /> */}
      {/* Spread Operator */}
      {/* <Counter {...obj} />

      <Counter title='2nd Counter' count={count} /> */}
      {/* In map, first argument is object, then the second argument will be index */}
      {
        // emp.map((obj, index)=>{
        //   return (
        //     // <Employee  key={index} name={obj.name} age={obj.age} />
        //     <Employee  key={index} {...obj} />

        //   )
        // })
        // If we remove curly braces and return, everything in that bracket() will be returned. So here in this case, we can remove those curly braces and return. If multiple line need bracket, otherwise not needed.

        emp.map((obj, index)=>
            <Employee  key={index} {...obj} />
        )
      }
    </div>
  )
}
export default App;
// export const use = 'variable' // named export
// export default 'variable' // default export