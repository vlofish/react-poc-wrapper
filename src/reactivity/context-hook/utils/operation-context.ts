/* ======= ======= ======= ======= ======= */
import { createContext, useContext } from 'react'
/* ======= ======= ======= ======= ======= */

export const defaultOperationContext = {
  value: 0,
  incrementDecrement: (operation: string) => console.error('Not yet implemented')
}

export const OperationContext = createContext(defaultOperationContext)

// TODO: should we move this func to a custom hook?
export function GetOperationContext() {
  const context = useContext(OperationContext)

  if (context === undefined) {
    throw new Error('Context is undefined')
  }

  return context
}
