import logo from './logo.svg';
import './App.css';
import {useCallback, useState} from 'react';
function App() {
  const [length,setlength]=useState(8);
  const [number,setnumber]=useState(false);
  const [char,setchar]=useState(false);
  const [password,setpassword]=useState("");
  const passwordgenerator =useCallback(()=>{
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz";
      if(number){
        str+="0123456789";
      }
      if(char){
        str+="!@#$%^&*()}{+-~";
      }
      for(let i=0;i<length;i++){
        let randomno=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(randomno);
      }
      setpassword(pass);
  },[length,number,char])
  return (
    <div className="App">
      <div className="box">
        <h1>Password Generator</h1>
        <div>
          <label>
            Length:
            <input
              type="number"
              value={length}
              onChange={(e) => setlength(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Include Numbers:
            <input
              type="checkbox"
              checked={number}
              onChange={(e) => setnumber(e.target.checked)}
            />
          </label>
        </div>
        <div>
          <label>
            Include Special Characters:
            <input
              type="checkbox"
              checked={char}
              onChange={(e) => setchar(e.target.checked)}
            />
          </label>
        </div>
        <button onClick={passwordgenerator}>Generate Password</button>
        <div>
          <h3>Your Password:</h3>
          <p>{password}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
