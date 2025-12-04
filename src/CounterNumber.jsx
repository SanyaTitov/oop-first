import React from 'react'
import { useSelector } from 'react-redux'
export function CounterNumber(){
    const count = useSelector(state => state.counter.value)
    return <span>{count}</span>
}