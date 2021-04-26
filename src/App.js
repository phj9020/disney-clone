import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
import {authService} from './fbase';
import Landing from './components/Landing';
import Header from './components/Header';
import LoggedInHeader from './components/LoggedInHeader';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(()=> {

    authService.onAuthStateChanged((user)=> {
      console.log(user);
      if(user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
    })

  }, []);

  return (
    <div className="App">
      <Router>
        {isLoggedIn ? 
          (
            <>
            <LoggedInHeader />
            <Switch>
              <Router path="/home" userObj={userObj} exact >
                <Home />
              </Router>
              <Redirect to='/home' />
            </Switch>
            <Footer />
            </>
          )
          : 
          (
            <>
              <Header /> 
              <Switch>
                <Route path="/" exact>
                  <Landing />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Redirect to="/" />
              </Switch>
              <Footer />
            </>
          )
        }
      </Router>
    </div>
  );
}

export default App;
