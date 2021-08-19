import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <input type="text" id="userInp" placeholder="0" disabled/>
          <input type="text" id="calcOut" placeholder="0" disabled/>
          <table>
           <tbody>
              <tr>
                <td onclick="">(</td>
                <td onclick="">)</td>
                <td onclick="">&lt;-</td>
                <td onclick="" className="vari">+</td>
              </tr>
              <tr>
                <td onclick="">7</td>
                <td onclick="">8</td>
                <td onclick="">9</td>
                <td onclick="" className="vari">-</td>
              </tr>
              <tr>
                <td onclick="">4</td>
                <td onclick="">5</td>
                <td onclick="">6</td>
                <td onclick="" className="vari">*</td>
              </tr>
              <tr>
                <td onclick="">1</td>
                <td onclick="">2</td>
                <td onclick="">3</td>
                <td onclick="" className="vari">/</td>
              </tr>
              <tr>
                <td onclick="">C</td>
                <td onclick="">0</td>
                <td onclick="">.</td>
                <td onclick="" className="eqlBtn">=</td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
