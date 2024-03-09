import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import PropTypes from 'prop-types';

//import About from './components/About';

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const  showAlert =(message,type)=>{
        setAlert({
          msg: message,
          type: type
        })
       setTimeout(() => {
        setAlert(false);
       }, 3000);
  }
  const toggleMode =() =>{
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor ='#12385e';
          showAlert("Dark mode has been enabled.","Success");

        }else{
          setMode('light');
          document.body.style.backgroundColor ='white';
          showAlert("Light mode has been enabled.","Success");
        }
      }
  return (
  <>
    <Navbar title="TextUtils" About="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <dev className="center">
    {/*<About/>*/}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> 
    </dev>
  </>
  );
}

export default App;