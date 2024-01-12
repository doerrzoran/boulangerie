import { useEffect, useMemo, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout';
import Logs from './components/Logs';
import Home from './components/Home';
import Game from './components/Game';
import Login from './components/Login';
import BackOffice from './components/BackOffice';
import AddPastrie from './components/AddPastrie';
import ChangePastrie from './components/ChangePastrie';


function App() {
  
  
 
  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: '',
        element: <Layout content ={<Home />} />
      },
      {
        path: '/logs',
        element: <Layout content ={<Logs/>} />
      },
      {
        path: '/play',
        element: <Layout content ={<Game/>} />
      },
      {
        path: '/login',
        element: <Layout content ={<Login/>} />
      },
      {
        path: '/backoffice',
        element: <Layout content ={<BackOffice/>} />
      },
      {
        path: '/addPastries',
        element: <Layout content ={<AddPastrie/>} />
      },
      {
        path: '/modifyPastries/:id',
        element: <Layout content ={<ChangePastrie/>} />
      }
    ])
  
  }, [])

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
