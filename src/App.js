import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact >
            <Login />
          </Route>
          <Route path="/welcome" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
