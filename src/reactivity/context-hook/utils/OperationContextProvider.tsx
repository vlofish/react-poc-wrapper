/* ======= ======= ======= ======= ======= */
import { useEffect, useState } from 'react'
import { OperationContext, defaultOperationContext } from './operation-context'
import { incrementDecrement } from '../../common/operations'
/* ======= ======= ======= ======= ======= */

export function OperationContextProvider({ children }: any) {
  const [contextState, setContextState] = useState(defaultOperationContext)

  const incrementDecrement2 = (operation: string) => {
    let { value } = contextState

    value = incrementDecrement(operation, value)

    setContextState({
      ...contextState,
      value
    })
  }

  useEffect(() => {
    const { value } = contextState

    setContextState({
      value,
      incrementDecrement: incrementDecrement2
    })
  }, [contextState.value])

  return <OperationContext.Provider value={contextState}>{children}</OperationContext.Provider>
}
