import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Projects from './components/projects';
import Blog from './components/blog';
import AboutMe from './components/aboutme';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/aboutme" component={AboutMe}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
