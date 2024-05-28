
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes } from 'react-router-dom';


// import {
//   Route,
//   // Link,
//   // useRouteMatch,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  const [alert, setAlert] = useState("Nothing");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    // setTimeout(() => {
    //   setAlert(null);
    // }, 2000);
  }
  return (
    <>{/*<Router>*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container'>
      <TextForm showAlert={showAlert} heading="Enter your text here to analyze " mode={mode} />
        {/* <Routes>
          <Route exact path="/textform" element={<TextForm showAlert={showAlert} heading="Enter your text here to analyze " mode={mode} />} />
          <Route exact path="/about" element={<About />} />{/*Exact is used because it will exactly match the path assigned to it say: if
          /user-->render component1
          /user/about-->render component2 if exact is not used then react router will render /user for both cases as it will match /user only which is partially matching. */}
        {/* </Routes> */} 

      </div>
   {/* / </Router> */}
    </>
  );
}

export default App;
