import React from "react";
import './styles/App.css';
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom'
import About from "./pages/About";
import Posts from './pages/Posts'
import Navbar from "./components/UI/navbar/Navbar";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path='/404' element={<PageNotFound/>}></Route>
        <Route path='/*' element={<Navigate to="/404" replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
