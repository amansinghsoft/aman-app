import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';

//import About from './components/About';

function App() {
  const[mode,setMode]=useState('light');

  const toggleMode =() =>{
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor ='#12385e';
        }else{
          setMode('light');
          document.body.style.backgroundColor ='white';
        }
      }
  return (
  <>
    <Navbar title="TextUtils" About="About" mode={mode} toggleMode={toggleMode}/>
    <dev className="center">
    {/*<About/>*/}
    <TextForm heading="Enter the text to analyze" mode={mode}/> 
    </dev>
  </>
  );
}

export default App;