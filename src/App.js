import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import Programs from './components/Programs';
import Footer from './components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <header className="App-header">



        <Nav />
        <Main />
        <Programs />
        <Footer/>
      </header>
    </div>
  );
}

export default App;
