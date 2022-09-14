import { configureStore } from '@reduxjs/toolkit'
import numberSlice from '../reducers/numberSlice'
import titleSlice from '../reducers/titleSlice'
import createSagaMiddleware from 'redux-saga'
import bodySlice from '../reducers/bodySlice'
import mySaga from './ApiSaga'


const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  reducer: {
    balance : numberSlice,
    title :titleSlice,
    body :bodySlice,
  },
})
sagaMiddleware.run(mySaga);
export default store