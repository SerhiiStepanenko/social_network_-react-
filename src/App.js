import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import MyPosts from './components/MyPosts/MyPosts';
import Footer from './components/Footer/Footer';
import Messages from './components/Messages/Messages';
import Friends from './components/Friends/Friends';
import Photos from './components/Photos/Photos';
import News from './components/News/News';
import Community from './components/Community/Community';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="wraper">
          <Header />
          <About />

          <div className="wraperContent">
            <Route
              path='/home'
              render={() => <MyPosts state={props.state.homePage} />} />
            <Route
              path='/messages'
              render={() => <Messages state={props.state.messagesPage}/>} />
            <Route path='/friends' component={Friends} />
            <Route path='/photos' component={Photos} />
            <Route path='/news' component={News} />
            <Route path='/community' component={Community} />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;