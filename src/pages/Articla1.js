import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add , sub} from '../reducers/numberSlice'

function Articla1() {
  const count =useSelector((state) => state.balance.value)
  const dispatch =useDispatch()
  return (
      <>
           <h5 className=" card text-center text-success w-30 col-sm-3 m-5 md-3 border-danger " >This is a Artical related to Store working with Create Slice Number increment and decrement </h5>
            <div>
            <p className=" card text-center text-success col-sm-3 m-5 border-danger ">Slice Function through Create Property</p>
                
                  <span className='btn btn-primary m-3'> Total Balance : {count}  </span>
                  <br/>
                  <button className='btn btn-primary m-3' aria-label="Add value" onClick={() => dispatch(sub())}>Sub</button>
                  <button className='btn btn-primary m-3' aria-label="Add value" onClick={() => dispatch(add())}>Add</button>  
           </div>
     </>
    )
}
export default Articla1