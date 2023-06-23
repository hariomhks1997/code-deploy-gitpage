import "./App.css";
import React, { useState } from "react";
//import Module from "./Module";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
 const removeBodyClasses=()=>{
                document.body.classList.remove("bg-light");
                document.body.classList.remove("bg-success");
                document.body.classList.remove("bg-warning");
                document.body.classList.remove("bg-primary");
                document.body.classList.remove("bg-dark");
                document.body.classList.remove("bg-danger");
              }
  const togglemode = (cls) => {
    removeBodyClasses();
      document.body.classList.add("bg-"+cls); 
    if (cls==="success" ||  cls==="primary" || cls==="warning" || cls==="danger"|| cls==="light" ) {
      
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "sucess");
      document.title = "text mode dark";
    } else {
      
      setmode("light");

      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "sucess");
      document.title = "text mode light";
    }
  };

  const [alert, setalert] = useState("");
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert("");
    }, 2000);
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          togglemode={togglemode}
        ></Navbar>

        {/* <Navbar></Navbar> */}
        <Alert alert={alert}></Alert>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} ></About>}></Route>

            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter The Text To Analyze Below"
                  mode={mode}
                  showAlert={showAlert}
                ></TextForm>
              }
            ></Route>
          </Routes>
          {/* <TextForm  heading="Enter The Text To Analyze Below" mode={mode} showAlert={showAlert}></TextForm> 
      <About></About>
      <Module></Module> */}
        </div>
      </Router>
    </>
  );
}
//  {/* <div className="d-flex">
//             <div className="bg-primary rounded mx-2" onClick={()=>{props.togglemode("primary")}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
//             <div className="bg-danger rounded mx-2" onClick={()=>{props.togglemode("danger")}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
//             <div className="bg-success rounded mx-2" onClick={()=>{props.togglemode("success")}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
//             <div className="bg-warning rounded mx-2" onClick={()=>{props.togglemode("warning")}} style={{height:"30px",width:"30px",cursor:"pointer"}}></div>
//           </div> */}
//           const removeBodyClasses=()=>{
//             document.body.classList.remove("bg-light");
//             document.body.classList.remove("bg-success");
//             document.body.classList.remove("bg-warning");
//             document.body.classList.remove("bg-primary");
//             document.body.classList.remove("bg-dark");
//           }


export default App;
