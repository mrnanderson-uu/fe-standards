import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ReactQueryEx from './pages/ReactQueryEx';
import NoReactQueryEx from './pages/NoReactQueryEx';
import {NoReactQueryExContextProvider} from './contextproviders/NoReactQueryExContextProvider';

function App() {
  return (
    <div className="App">
        <Router>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-evenly'}} >
      <img src={logo} className="App-logo" alt="logo" />
      <div> <Link to="/">React-Query</Link></div>
      <div> <Link to="/no">NO React-Query</Link></div>
      </div>
      
    
     

        <hr />
        <NoReactQueryExContextProvider>
        <Switch>
          <Route exact path="/" component={ReactQueryEx} />
          <Route path="/no" component={NoReactQueryEx} />
        </Switch>
        </NoReactQueryExContextProvider>
       
        </Router>
    </div>
  );
}

export default App;
