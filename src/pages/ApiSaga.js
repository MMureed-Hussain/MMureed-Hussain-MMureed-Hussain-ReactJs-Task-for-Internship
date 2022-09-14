import React from 'react'
import axios  from "axios";
import {call, put ,takeLatest} from 'redux-saga/effects'
import { AboutBody } from '../reducers/bodySlice';

export const fetchBypostBody = async () => {
  try{
       const respons= await axios.get('https://jsonplaceholder.typicode.com/posts');
      //  const respons.data.title;
      const BodyGet = respons.data[99].body;
       return BodyGet;
  }
  catch(e){
    console.log(e)
  }
}

function* ApiSaga() {
  try{
const d=yield call(fetchBypostBody)
yield put(AboutBody(d))

  }
  catch(e){
    console.log(e)
  }
}
function* mySaga() {
   yield takeLatest("API-SAGA", ApiSaga)
} 
export default mySaga