import './App.css';
import Navbar from './component/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch >
          <Route path="/home" exact component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path="/services" component={Services}/>
          <Route path="/products" component={Products}/>
          <Route path="/sign-up" component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
