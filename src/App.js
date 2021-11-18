import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls);
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

    return (
    <>
    <Router>
     <Navbar title="MoDiFy" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3">
     <Routes>
          <Route exact path="/about" element={ <About mode={mode}/>} />
          <Route exact path="/" element={ <TextForm showAlert={showAlert} heading="Try MoDiFy - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>} />
        </Routes>
     </div>
        </Router>
    </>
  );
}

export default App;