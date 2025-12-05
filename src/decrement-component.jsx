import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement } from './counterSlice'
export function DecrementComponent(){
    const dispatch = useDispatch()
    return <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
    </button>
}