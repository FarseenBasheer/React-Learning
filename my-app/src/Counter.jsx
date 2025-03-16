import React from 'react'

// function Counter(props) {
// //   {title:"1st Counter", count:2}
// const {title, count} = props;
//   return (
//     <div>
//       {/* <h1>Counter: {props.count}</h1> */}
//       {/* <h1>{props.title}: {props.count}</h1> */}
//       <h1>{title}: {count}</h1>
//     </div>
//   )
// }

// export default Counter

// function Counter({title, count}) {
//     return (
//       <div>
//         <h1>{title}: {count}</h1>
//       </div>
//     )
//   }
  
//   export default Counter

function Counter({title, ...obj}) {
      return (
        <div>
          <h1>{title}: {obj.count}</h1>
        </div>
      )
    }
    
    export default Counter
    