import { useDispatch, useSelector } from 'react-redux';
import './App.css';
function App() {

  const counter=useSelector((state)=>state.counter);

  const dispatch=useDispatch()
  const increment=()=>{
      dispatch({type:"INC"})
  };

  const decrement=()=>{
      dispatch({type:"DEC"})
  }
  return (
     

    <div className="App">
      <h3>Connter</h3>
      {counter}
    <br/>
    <br/> 
      <button onClick={increment} >++</button>
      <button onClick={decrement}>--</button>
    </div>


  );
};

export default App;
