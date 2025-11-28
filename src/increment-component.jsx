import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementAction } from './counterSlice'
export function IncrementComponent(){
    const dispatch = useDispatch()
    return <button aria-label="Increment value" onClick={() => dispatch(incrementAction())}>
        Increment
    </button>
}