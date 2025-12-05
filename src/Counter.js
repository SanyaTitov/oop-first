import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DecrementComponent } from './decrement-component'
import { IncrementComponent } from './increment-component'
import { CounterNumber } from './CounterNumber'
export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <IncrementComponent />
        <CounterNumber />
        <DecrementComponent />
      </div>
    </div>
  )
}