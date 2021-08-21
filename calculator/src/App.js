import './App.css';
import React, { component } from 'react';
import { evalString, removeChar, getOutput, reset } from './calc.js'


class App extends React.Component {

  render () {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <input type="text" id="userInp" value="" placeholder="0" disabled/>
          <input type="text" id="calcOut" value="" placeholder="0" disabled/>
          <table>
           <tbody>
              <tr>
                <td onClick={() => { console.log('test') }}>(</td>
                <td onClick={() => { evalString(')') }}>)</td>
                <td onClick={() => { removeChar() }}>&lt;-</td>
                <td onClick={() => { evalString('+')}} className="vari">+</td>
              </tr>
              <tr>
                <td onClick={() => { evalString('7')}}>7</td>
                <td onClick={() => { evalString('8')}}>8</td>
                <td onClick={() => { evalString('9')}}>9</td>
                <td onClick={() => { evalString('-')}} className="vari">-</td>
              </tr>
              <tr>
                <td onClick={() => { evalString('4')}}>4</td>
                <td onClick={() => { evalString('5')}}>5</td>
                <td onClick={() => { evalString('6')}}>6</td>
                <td onClick={() => { evalString('*')}} className="vari">*</td>
              </tr>
              <tr>
                <td onClick={() => { evalString('1')}}>1</td>
                <td onClick={() => { evalString('2')}}>2</td>
                <td onClick={() => { evalString('3')}}>3</td>
                <td onClick={() => { evalString('/')}} className="vari">/</td>
              </tr>
              <tr>
                <td onClick={() => { reset() }}>C</td>
                <td onClick={() => { evalString('0')}}>0</td>
                <td onClick={() => { evalString('.')}}>.</td>
                <td onClick={() => { getOutput() }} className="eqlBtn">=</td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
 }
}

export default App;
