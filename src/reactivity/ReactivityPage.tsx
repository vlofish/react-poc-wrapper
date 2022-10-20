/* ======= ======= ======= ======= ======= */
import { useEffect, useState } from 'react'

import RxJSPage from './rxjs/RxJSPage'
import ReduxPage from './redux/ReduxPage'
import ContextHookPage from './context-hook/ContextHookPage'

import { store } from '../common/store'
import { SectionName } from './common/enums'
import { defaultSectionVisibility } from './common/constants'
/* ======= ======= ======= ======= ======= */

function ReactivityPage() {
  const [hiddenSection, setHiddenSection] = useState({
    ...defaultSectionVisibility
  })

  useEffect(() => {
    store.subscribe(() => {
      const { hideRxJSSection, hideContextSection } = store.getState()

      setHiddenSection({
        [SectionName.RxJS]: hideRxJSSection,
        [SectionName.Context]: hideContextSection
      })
    })
  }, [])

  return (
    <section>
      <header>
        <h2> Reactivity </h2>
      </header>
      <ReduxPage />
      {hiddenSection[SectionName.RxJS] ? null : <RxJSPage />}
      {hiddenSection[SectionName.Context] ? null : <ContextHookPage />}
    </section>
  )
}

export default ReactivityPage
