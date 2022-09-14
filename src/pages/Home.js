import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
    <>
        <h3 className=" card text-center text-secondary w-50 col-sm-3 m-5 md-3 border-danger" >
          Home page </h3>
          <h5 className=" card text-center text-success w-30 col-sm-3 m-5 md-3 border-danger " >
          wellcom to react Routing
          related Task with 
         BrowserRouter with Routes and Route 
         and also provider Store 
         Link work as anker tag a
         and also outlet
        </h5>
        <Outlet/>
    </>
  )
}
export default Home