import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact >
            <Login />
          </Route>
          <Route path="/welcome" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
