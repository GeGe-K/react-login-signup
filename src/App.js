import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Login } from "./components/login";
import Signup  from './components/login/signup'


function App() {
  const Home = () => (
    <h2>Home</h2>
  )
  return (
    <Router>
    <div className="App">
      <Switch>
      {/* <Route path= '/login' component = {Login}/>
      <Route path='/signup' component= {Signup} /> */}
      <Route path='/login' component = {Login}/>
      <Route path='/signup' component = {Signup}/>
      <Route exact path='/' component = {Home} />
      </Switch>
    
    </div>
    </Router>

  );
}

export default App;
