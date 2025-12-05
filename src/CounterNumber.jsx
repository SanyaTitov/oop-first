import React from 'react'
import { useSelector } from 'react-redux'
import { incrementByAmount } from './counterSlice'
export function CounterNumber(){
    const count = useSelector(state => state.counter.value)
    return <span>{count}
    </span>
}