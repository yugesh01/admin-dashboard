import logo from './logo.svg';
import React from 'react'
import './App.css';
import Header from './component/Header';
import Menu from './component/Menu';
import Dashboard from './component/Dashboard';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <Menu />
    <Dashboard />
    <Footer />
    </div>
  );
}

export default App;
