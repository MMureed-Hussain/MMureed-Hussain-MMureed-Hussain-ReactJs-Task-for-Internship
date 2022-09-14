import React from 'react'
import {Link, Outlet } from 'react-router-dom';

function Articla() {
  return (
      <>
      <h3 className=" card text-center text-secondary w-50 col-sm-3 m-5 md-3 border-danger ">Store with Redux</h3>
      <h5 className=" card text-center text-success w-30 col-sm-3 m-5 md-3 border-danger " >In Artical field describe Store with slice  and create Artical child for createSlice Api Thunk and Saga</h5>
      
      <div className="nav justify-content-center">
     
        <li className="nav-link  btn btn-success m-3"><Link className='text-decoration-none text-light' to="/articla/1">Articla1</Link></li>
        <li className="nav-link btn btn-success m-3"><Link className='text-decoration-none text-light' to="/articla/2">Articla2</Link></li> 
        <li className="nav-link btn btn-success m-3"><Link className='text-decoration-none text-light' to="/articla/3">Articla3</Link></li>
        
      </div>
      <Outlet/>
 </>
  )
}
export default Articla