import "./App.css";
import React,{useState} from "react";
import Module from "./Module";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode]=useState("light")
  const togglemode=()=>{
    if(mode==="light")
    {
      setmode("dark")
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode has been enabled","Sucess")
      document.title="text mode dark"
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled","Sucess")
      document.title="text mode light"
    }
  }
  
  const [alert, setalert]=useState("");
  const showAlert=(message,type)=>{
 setalert({
  msg:message,
  type:type
 })
 setTimeout(()=>{
  setalert("")
 },2000)
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} togglemode={togglemode} ></Navbar>
      
      {/* <Navbar></Navbar> */}
      <Alert alert={alert}></Alert>
      <div className="container my-3"> 
      <TextForm  heading="Enter The Text To Analyze Below" mode={mode} showAlert={showAlert}></TextForm>
      <About></About>
      <Module></Module>
      </div>
    </>
  );
}

export default App;