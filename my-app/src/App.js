import './App.css';
import Header from './components/Header';
function App() { //component. only single component possible in return. So keep it inside a div
  const data = 'Hello world';
  const data1 = 'Hello world 1';
  return (
    <div>
      <Header />
      <Header data1={data1}/>
      <h1 style={{color: 'red', backgroundColor:'blue'}}>Hello world</h1>
      <p className='hello'>My first React app</p>
      {/* <p className={loading 'hello'}>My first React app</p> */}
      {/* Not completed, will learn this condition rendering in future */}
      <p>This is sample {data}</p>
      <Hello />
      <Hello />
      <br></br>
    </div>
  );
}

export default App;

function Hello() {
  return <h1 className='hello'>Hello</h1>
} // We normally don't create like this. we create new folder and file and then bring it here. But for simplicity, we are doing this here.
// OnClick also in CamelCase