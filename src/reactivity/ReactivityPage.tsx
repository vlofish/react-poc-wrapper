import ContextHookPage from './context-hook/ContextHookPage'
import ReduxPage from './redux/ReduxPage'
import RxJSPage from './rxjs/RxJSPage'
import { useEffect, useState } from 'react'
import { store } from '../common/store'

function ReactivityPage() {
  const [state, setState] = useState({
    hideRxJS: false,
    hideContext: false
  })

  useEffect(() => {
    store.subscribe(() => {
      const { hideRxJSSection, hideContextSection } = store.getState()

      setState({
        hideRxJS: hideRxJSSection,
        hideContext: hideContextSection
      })
    })
  }, [])

  return (
    <section>
      <header>
        <h2> Reactivity </h2>
      </header>
      <ReduxPage />
      {state.hideRxJS ? null : <RxJSPage />}
      {state.hideContext ? null : <ContextHookPage />}
    </section>
  )
}

export default ReactivityPage
