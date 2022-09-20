import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App text-white">
     <h1 className='text-5xl my-5 font-semibold'>COUNTER</h1>
     <Counter></Counter>
    </div>
  );
}
// ** Make a counter component

function Counter(){
  let [count,setCount] = useState(0);
  const increaseHandle = ()=> setCount(++count);
  const decreaseHandle = ()=> setCount(--count);
  const resetHandle = ()=> setCount(0);

  return(
    <div className='my-5'>
      <h1 className='text-3xl font-extrabold'>Count:{count < 0 ? 'Nagetive value no possible' : count}</h1>
      <button onClick={increaseHandle} type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"><i className="fa-solid fa-plus"></i></button>
      <button onClick={decreaseHandle} type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"><i className="fa-solid fa-minus"></i></button>
      <button onClick={resetHandle} type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800">Reset</button>
    </div>
  )
}

export default App;
