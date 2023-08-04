
import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';


function App() {
  const[mode,setmode]=useState('light');
  const[alert,setalert]=useState(null);

   const showAlert=(message,type)=>{
    setalert({
      msg:message,
      typ:type

    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }
 
 
  const toggle=()=>{
     if(mode==='light')
     {
      setmode('dark')
      document.body.style.backgroundColor='#067a97'
      document.body.style.color='white'
      showAlert('Dark Mode Enabled','success')
     }else
     {
      setmode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      showAlert('Light Mode Enabled','success')
     }
     
  }  
  return (
    <> 
      <Navbar title="Hakimi Dry Fruits" mode={mode} toggleMode={toggle}  />
      <Alert  alert={alert}/>
      <div className="container my-3" >
        <Form heading="Enter Text Here"  mode={mode} showAlert={showAlert}/>
      </div>
    </>
   
  );
}

export default App;
