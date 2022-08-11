import React from "react";
import './styles/App.css';
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom'
import About from "./pages/About";
import Posts from './pages/Posts'
import Navbar from "./components/UI/navbar/Navbar";
import PageNotFound from "./pages/PageNotFound";
import AppRouter from './components/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
