import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, { initialState } from '../reducers/index'
import { 
    applyNumber,
    changeOperation,
    clearDisplay,
    addMemory,
    clearMemory,
    recallMemory
     } from '../actions/index'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleNumber = (number) => {
    console.log(state);
    dispatch(applyNumber(number));
  }

  const handleOperation = (operator) => {
    dispatch(changeOperation(operator))
  }

  const clear = () => {
    dispatch(clearDisplay())
  }

  const handleMemoryAdd = () => {
    dispatch(addMemory())
  }

  const handleMemoryClear = () => {
    dispatch(clearMemory())
  }

  const handleMemoryRecall = () => {
    dispatch(recallMemory())
  }
 


  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b>{state.operation}</span>
              <span id="memory"><b>Memory:</b>{state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={() => handleMemoryAdd()} value={"M+"}/>
              <CalcButton onClick={() => handleMemoryRecall()} value={"MR"}/>
              <CalcButton onClick={() => handleMemoryClear()} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleNumber(1)} value={1}/>
              <CalcButton onClick={() => handleNumber(2)} value={2}/>
              <CalcButton onClick={() => handleNumber(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleNumber(4)} value={4}/>
              <CalcButton onClick={() => handleNumber(5)} value={5}/>
              <CalcButton onClick={() => handleNumber(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleNumber(7)} value={7}/>
              <CalcButton onClick={() => handleNumber(8)} value={8}/>
              <CalcButton onClick={() => handleNumber(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleOperation('+')} value={"+"}/>
              <CalcButton onClick={() => handleOperation('*')} value={"*"}/>
              <CalcButton onClick={() => handleOperation('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={() => clear()} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
