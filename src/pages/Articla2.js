import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchBypostId} from '../reducers/titleSlice'

function Articla2() {
  const ab =useSelector((state) => state.title.title)
  const dispatch = useDispatch();
  return (
    <>
       <h5 className=" card text-center text-success w-30 col-sm-3 m-5 md-3 border-danger " >This is a Artical related to Thunk working with dummy Api extract Title part of Api </h5>
        <div>
            <button className='btn btn-primary m-3' aria-label="Add value" onClick={() => dispatch(fetchBypostId())}>Title Here</button>
            <button className='btn btn-primary m-3' aria-label="Add value" disabled >{ab}</button>
        </div>
    </>
  )
}
export default Articla2
