import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import ContactForm from './components/subComponents/ContactForm.jsx'
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: "",
    element: <Home />,
    
  }, {
    path: 'about',
    element: <About />
  },
  {
    path: 'contact',
    element: <Contact />
  }, {
    path: 'projects',
    element: <Projects />
  },{
    path:"contactform",
    element:<ContactForm/>
  }],
}])
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
