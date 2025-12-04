import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement } from './counterSlice'
import { IncrementComponent } from './increment-component'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <IncrementComponent />
        <span>{count}</span>
        <DecrementComponent />
      </div>
    </div>
  )
}