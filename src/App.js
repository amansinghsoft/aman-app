import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Alert from './components/Alert';


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
          document.title = 'TextUtils . Dark Mode';
         setInterval(() => {
            document.title = 'TextUtils is Amazing Mode';
          }, 3000);
          setInterval(() => {
            document.title = 'Install TextUtils Now';
          }, 1000);

        }else{
          setMode('light');
          document.body.style.backgroundColor ='white';
          showAlert("Light mode has been enabled.","Success");
          document.title = 'TextUtils . Light Mode';

        }
      }
  const yellowMode =() =>{
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor ='#3B4207';
          showAlert("Dark mode has been enabled.","Success");

        }else{
          setMode('light');
          document.body.style.backgroundColor ='white';
          showAlert("Light mode has been enabled.","Success");
        }
      }
  return (
  <>
    <Navbar title="TextUtils" About="About" mode={mode} toggleMode={toggleMode} yellowMode={yellowMode}/>
    <Alert alert={alert}/>
    <dev className="center">
    {/*<About/>*/}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> 
    </dev>
  </>
  );
}

export default App;