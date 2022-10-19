/* ======= ======= ======= ======= ======= */
import { useEffect, useState } from 'react'
import { OperationContext, defaultOperationContext } from './operation-context'
/* ======= ======= ======= ======= ======= */

export function OperationContextProvider({ children }: any) {
  const [contextState, setContextState] = useState(defaultOperationContext)

  const incrementDecrement = (operation: string) => {
    let { value } = contextState

    switch (operation) {
      case 'increment':
        value++
        break

      case 'decrement':
        value--
        break
    }

    setContextState({
      ...contextState,
      value
    })
  }

  useEffect(() => {
    const { value } = contextState

    setContextState({
      value,
      incrementDecrement: incrementDecrement
    })
  }, [contextState.value])

  return <OperationContext.Provider value={contextState}>{children}</OperationContext.Provider>
}
