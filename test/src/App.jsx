import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import{ createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Register from './components/Contact/Contact'
import Contact from './components/Contact/Contact'
import Protofolio from './components/Protofolio/Protofolio'
function App() {
  const [count, setCount] = useState(0)
  let x=createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
      {path:'protofolio',element:<Protofolio/>},
    ]}  
  ]
  
  )
  return (
    <>
<RouterProvider router={x}></RouterProvider>
       </>
  )
}

export default App
