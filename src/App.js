import React, { Component } from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/loggedOut/Home/Home";
import Chat from "./components/loggedIn/Chat/ChatClass";
import Signup from "./components/loggedOut/Signup/Signup";
import Login from "./components/loggedOut/Login/Login";
import About from "./components/loggedOut/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import InfoChildren from "./components/loggedOut/Info/InfoChildren";
import InfoParents from "./components/loggedOut/Info/InfoParents";
import InfoSchool from "./components/loggedOut/Info/InfoSchool";
import AboutIfunanyachi from "./components/loggedOut/About/AboutIfunanyachi";
import AboutChikamso from "./components/loggedOut/About/AboutChikamso";
import Search from "../src/components/Search/search";
// import 'materialize-css';

class App extends Component {
  render() {
    return (
      <div className="center">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/chat" component={Chat} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/info-for-chidren" component={InfoChildren} />
            <Route path="/info-for-parents" component={InfoParents} />
            <Route path="/info-for-schools" component={InfoSchool} />
            <Route path="/about-ifunanyachi" component={AboutIfunanyachi} />
            <Route path="/about-chikamso" component={AboutChikamso} />
            <Route path="/search" component={Search} />
          </Switch>
        </Router>
        <div className="foot">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
