// import Navbar from './components/Navbar';
// import './App.css';
// import TextForm from './components/TextForm';
// import About from './components/About';
// import { useState, useSyncExternalStore } from 'react';
// import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {
//   const [Mode, setMode] = useState("light");
//   const [alert, setAlert] = useState(null);
  
//   const showAlert = (message, type)=>{
//     setAlert({
//       msg: message,
//       type: type
//     })
//     setTimeout(() => {
//       setAlert(null)
//     }, 1500);
//   }

//   const toggleMode = () => {
//     if (Mode === "light") {
//       setMode("dark"); 
//       document.body.style.backgroundColor = 'gray';      
//       showAlert("Dark mode has been enable", "success");
//       document.title = "TextUtils - Dark Mode";             
//     } 
//     else {
//       setMode("light");
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light mode has been enable", "success");
//       document.title = "TextUtils - Light Mode";
//     }
//   }

//   return (
//     <>  
//     <Router>
//       <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} />
//       <Alert alert={alert}/>
//       <div className="container my-3">
//       <Switch>
//           <Route path="/about">
//             <About />
//           </Route>          
//           <Route path="/">
//           <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>                  
//           </Route>
//         </Switch>                
//       </div>
//       </Router>
//     </>
//   );
// }

// export default App;


// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from './components/Navbar';
// import './App.css';
// import TextForm from './components/TextForm';
// // import About from './components/About';
//  import { useState, useSyncExternalStore } from 'react';
// import Alert from './components/Alert';

// function App() {
//   const [Mode, setMode] = useState("light");
//   const [alert, setAlert] = useState(null);
  
//   const showAlert = (message, type)=>{
//     setAlert({
//       msg: message,
//       type: type
//     })
//     setTimeout(() => {
//       setAlert(null)
//     }, 1500);
//   }

//   const toggleMode = () => {
//     if (Mode === "light") {
//       setMode("dark"); 
//       document.body.style.backgroundColor = 'gray';      
//       showAlert("Dark mode has been enable", "success");
//       document.title = "TextUtils - Dark Mode"; 
//     } 
//     else {
//       setMode("light");
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light mode has been enable", "success");
//       document.title = "TextUtils - Light Mode";
//     }
//   }

//   return (
//     <>  
//     {/* <Router> */}
//       <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} />
//       <Alert alert={alert}/>
//       <div className="container my-3">
//         {/* <Routes> */}
//           {/* <Route path="/about" element={<About />} /> */}
//           {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"/>} /> */}
//         {/* </Routes>                 */}
//         <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}> </TextForm>
//       </div>
//     {/* </Router> */}
//     </>
//   );
// }

// export default App;


import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import { useState } from 'react'; // Removed unused import

import Alert from './components/Alert';

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark"); 
      document.body.style.backgroundColor = 'gray';      
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils - Dark Mode"; 
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>  
      <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}> </TextForm>
      </div>
    </>
  );
}

export default App;
