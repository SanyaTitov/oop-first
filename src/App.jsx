import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, incrementAction } from './counterSlice'
import { Counter } from './Counter'
export function App() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
     <Counter/>
     
    </div>
  )
}