import React, {useState} from 'react';
import './App.css';
import {db} from './firebase'

function App() {

  const[num, setPhone] = useState('');
  const[accesscode, setCode] = useState('');

  // Button: Phone Number
  function handlePhoneSubmit(e){
    e.preventDefault()
    if(num ===''){
      return
    } alert('Access code has been sent to ' +num)
  } // end of handlePhoneSubmit

  // Button: Access Code
  function handleACSubmit(e){
    e.preventDefault()
    if(accesscode === ''){
      return
    } alert(accesscode)
  } // end of handleACSubmit

  // Generate a random 6 digit code
  function accessCodeGenerator() {
    return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
  }

  return (
    <div className='App'>
      <h1> Login </h1>

    <form className="Inputs" onSubmit={handlePhoneSubmit}>
      <label for="num"> Phone Number: </label>
      <input 
        type="phonenum" 
        name="num" 
        placeholder="Enter phone number"
        value={num}
        onChange={(e) => setPhone(e.target.value)} />
      <button type="submit" >Get Code</button>
      </form>

      <form onSubmit={handleACSubmit}>
      <label for="code"> Access Code: </label>
      <input 
        type="accesscode" 
        name="code" 
        placeholder="Enter access code"
        value={accesscode}
        onChange={(e) => setCode(e.target.value)} />
      <button type="submit"> Submit</button>
    </form>
    </div>
  );
  } // end of functionApp()

export default App;
