/* ======= ======= ======= ======= ======= */
import { useEffect, useState } from 'react'
import { store } from '../../../common/store'

import { SectionName } from '../../common/enums'
import { ActionName } from '../../../common/enums'
import { defaultSectionVisibility } from '../../common/constants'

import ReduxSectionVisibilityButtonComp from './ReduxSectionVisibilityButtonComp'
/* ======= ======= ======= ======= ======= */

const sectionHidden = {
  ...defaultSectionVisibility
}

const storeActionMap: any = {
  [SectionName.RxJS]: ActionName.HideRxJS,
  [SectionName.Context]: ActionName.HideContextHook
}

function ReduxSectionVisibilityComp() {
  const [buttonText, setButtonText]: any = useState({
    [SectionName.RxJS]: 'Hide RxJS Section',
    [SectionName.Context]: 'Hide Context-Hook Section'
  })

  useEffect(() => {
    // TODO: can i add an rxjs pipe here?
    store.subscribe(() => {
      const { hideRxJSSection, hideContextSection } = store.getState()

      // TODO: make this immutable
      sectionHidden[SectionName.RxJS] = hideRxJSSection
      sectionHidden[SectionName.Context] = hideContextSection
    })
  }, [])

  const updateButtonText = (sectionName: string) => {
    const currentButtonText = buttonText[sectionName]

    const newText = currentButtonText.includes('Display')
      ? currentButtonText.replace('Display', 'Hide')
      : currentButtonText.replace('Hide', 'Display')

    setButtonText({
      ...buttonText,
      [sectionName]: newText
    })
  }

  const dispatchSectionVisibility = (page: string) => {
    sectionHidden[page] = !sectionHidden[page]
    store.dispatch({ type: `${storeActionMap[page]}`, payload: sectionHidden[page] })
  }

  const handleClick = (page: string) => {
    updateButtonText(page)
    dispatchSectionVisibility(page)
  }

  return (
    <section>
      <ReduxSectionVisibilityButtonComp pageTitle={buttonText.rxjs} onClick={() => handleClick(SectionName.RxJS)} />
      <ReduxSectionVisibilityButtonComp
        pageTitle={buttonText.contextHook}
        onClick={() => handleClick(SectionName.Context)}
      />
    </section>
  )
}

export default ReduxSectionVisibilityComp
