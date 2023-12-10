import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Login from '../login'
import Dashboard from '../Dashboad'


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../Home'
const Pages = () => {
  return (
    <>
      <Router>
        {/* <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch> */}
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default Pages
