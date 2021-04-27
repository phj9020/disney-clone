import React, {useEffect} from 'react';
import { BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
import {authService} from './fbase';
import Landing from './components/Landing';
import Header from './components/Header';
import LoggedInHeader from './components/LoggedInHeader';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import {useDispatch, useSelector} from 'react-redux';
import {setSignOutState, loggedInState} from './features/user/userSlice';


function App() {
  const isLoggedIn = useSelector(loggedInState);
  const dispatch = useDispatch();
  
  console.log(isLoggedIn);
  
  useEffect(()=> {

    authService.onAuthStateChanged((user)=> {
      if(user) {
        dispatch(setSignOutState({
          isLoggedIn:true
        }))
        
      } else {
        dispatch(setSignOutState({
          isLoggedIn:false
        }))

      }
    })
  }, [dispatch]);

  return (
    <div className="App">
          <Router>
              {isLoggedIn ? <LoggedInHeader /> : <Header /> }
                <Switch>
                    <Route path="/" exact>
                      {isLoggedIn ? 
                          <>
                            <Home /> 
                            <Redirect from="/" to="/home" />
                          </>
                      : <Landing />}
                    </Route>
                    <Router path="/home" >
                      <Home />
                    </Router>
                    {isLoggedIn ? null : 
                    <>
                      <Route path="/login">
                        <Login />
                      </Route>
                      <Route path="/signup">
                        <SignUp />
                      </Route>
                    </>
                    }
                    {isLoggedIn ? <Redirect to="/home" /> : <Redirect to="/" /> }
                </Switch>
              <Footer />
          </Router>
    </div>
  );
}

export default App;
