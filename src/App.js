import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Pages/HomePages/Home';
import Services from './Components/Pages/Services/Services'
import Products from './Components/Pages/Products/Products'
import SignUp from './Components/Pages/SignUp/SignUp'
import Footer from './Components/Pages/Footer/Footer';



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
