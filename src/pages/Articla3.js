import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import {fetchBypostBody} from '../pages/ApiSaga'

function Articla3() {
  const sga = useSelector ((state) => state.body.body)
  const dispatch = useDispatch();
  return (
    <>
    <div>
      <h5 className=" card text-center text-success w-30 col-sm-3 m-5 md-3 border-danger " >This is a Artical related to Saga working with dummy Api extract body part of Api </h5>
      <div>
         <button className='btn btn-primary m-3' aria-label="Add value" onClick={() => dispatch({type:'API-SAGA'})}>Body Here</button>
        <button className='btn btn-primary m-3' aria-label="Add value" disabled >{sga}</button>
    </div>
    </div>
</>
  )
}
export default Articla3