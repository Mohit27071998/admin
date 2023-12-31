import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
import { useDispatch ,useSelector,TypedUseSelectorHook} from 'react-redux'

export const store = configureStore({
reducer:{
    user:UserSlice
}
})

export const  useAppDispatch:()=> typeof store.dispatch = useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector