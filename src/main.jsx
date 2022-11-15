import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/layout'
import LayoutTest from './components/LayoutTest'
import Test from './pages/Test'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Test/>
  </React.StrictMode>
)
