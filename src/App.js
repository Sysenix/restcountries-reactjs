import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Countries from './components/Countries'
import Country from './components/Country'

function App() {
  return (
    <Router>
      <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Countries />}> </Route>
        <Route path="/countries/:name" element={<Country />}></Route>
        </Routes>
      </>
      
    </Router>
  )
}

export default App
