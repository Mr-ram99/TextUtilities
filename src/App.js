import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, alertType) =>{
    setAlert({
      msg:massage,
      type:alertType
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode =()=>{
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Switched to dark mode!!", "success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Switched to light mode!!", "success");
    }
    
  }
  return (
    <Router>
    <Navbar title="TextUtilities" about="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter Your Text To Analyse" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
