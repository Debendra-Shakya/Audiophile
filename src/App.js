import React from 'react'
import Navbar from './componenets/Navbar/Navbar'
import GlobalStyle from './globalStyles'
import Home from './pages/Home'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <GlobalStyle />
    

    <Home />
    </>
  )
}

export default App