// import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// pages 
import Profile from './Pages/UserProfile'
import HomePage from './Pages/HomePage'
import SignIn from './Pages/Signin'
import SignUp from './Pages/Signup';
import QuestionPage from './Pages/QuestionPage';
import QuestionEditor from './Pages/QuestionEditor';
import { useState } from 'react';

function App() {

  // the initial state is false = so the user isnt logged in 
  const [IsLogged, setIsLogged] = useState(false);
  
  const user = localStorage.getItem("token");

  if (user){
    setIsLogged = true
  }

  // let content;
  // // so if isLogged = true the it must allow the user to ask question 
  // if (IsLogged) {
  //   content = document.getElementById("");
  // } else {
  //   content = <SignUp />;
  // }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Navbar />

      <Routes>
        {/* <Route path='/' element={<HomePage/>}/> */}

        {/* {IsLogged && <Route path="/" element={<HomePage />} />} */}
        {IsLogged ? <Route path="/" element={<HomePage/>}/> : <Route path='/SignUp' element={<SignUp/>}/>}
        
        {/* this is making so that the used to be home path is now the signup until user is logged in  */}
        <Route path="/" element={<Navigate replace to="/SignUp" />} />
        {/* the other home link for after the user has logged  */}
        <Route path='/Home' element={<HomePage />} />

        <Route path='/Profile' element={<Profile />} />
        <Route path='/Signin' element={<SignIn />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/Question' element={<QuestionPage />} />
        <Route path='/ask' element={<QuestionEditor />} />
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
