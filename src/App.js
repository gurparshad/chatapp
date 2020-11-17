import React from 'react';
import './App.css';
import {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import Main from './components/Main/Main';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/Login/Login';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("insidee useeffect");
    auth.onAuthStateChanged(authUser => {
      console.log("inside auth function");
      if(authUser){
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        )
      }else {
        // user loged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    // BEM naming convention
    <div className="app">
    {user ? <Main/> : <Login/> }
    </div>
  );
}

export default App;
