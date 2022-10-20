/* ======= ======= ======= ======= ======= */
import { useEffect, useState } from 'react'

import RxJSPage from './rxjs/RxJSPage'
import ContextHookPage from './context-hook/ContextHookPage'

import { store } from '../common/store'
import { SectionName } from './common/enums'
import { defaultSectionVisibility } from './common/constants'
/* ======= ======= ======= ======= ======= */

function ReactivityComp() {
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
    <>
      {hiddenSection[SectionName.RxJS] ? null : <RxJSPage />}
      {hiddenSection[SectionName.Context] ? null : <ContextHookPage />}
    </>
  )
}

export default ReactivityComp
