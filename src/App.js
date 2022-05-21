import React from 'react'
import Navbar from './componenets/Navbar/Navbar'
import GlobalStyle from './globalStyles'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <GlobalStyle />
    <Navbar />
    
    <Home />
    </>
  )
}

export default App