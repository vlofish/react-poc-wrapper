/* ======= ======= ======= ======= ======= */
import HeaderTitleComp from '../common/HeaderTitleComp'

import ContextHookResultComp from './components/ContextHookResultComp'
import ContextHookIncrementComp from './components/ContextHookIncrementComp'
import ContextHookDecrementComp from './components/ContextHookDecrementComp'

import { OperationContextProvider } from './utils/OperationContextProvider'
/* ======= ======= ======= ======= ======= */

function ContextHookPage() {
  const borderStyle = {
    border: 'black 1px dotted'
  }

  return (
    <section style={borderStyle}>
      <HeaderTitleComp title="Context Hook" />

      <section>
        <OperationContextProvider>
          <ContextHookDecrementComp />
          <ContextHookIncrementComp />
          <ContextHookResultComp />
        </OperationContextProvider>
      </section>
    </section>
  )
}

export default ContextHookPage
