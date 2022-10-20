/* ======= ======= ======= ======= ======= */
import { useState } from 'react'
import { store } from '../../../store/store'
import ReduxSectionVisibilityButtonComp from './ReduxSectionVisibilityButtonComp'
/* ======= ======= ======= ======= ======= */

const hiddenSectionsState: any = {
  rxjs: false,
  contextHook: false
}

function ReduxSectionVisibilityComp() {
  const [pageTitleState, setPageTitle]: any = useState({
    rxjs: 'Hide RxJS Section',
    contextHook: 'Hide Context-Hook Section'
  })

  const updatePageTitle = (page: string) => {
    let updatedPageTitle
    const currentPageTitle = pageTitleState[page]

    if (currentPageTitle.includes('Display')) {
      updatedPageTitle = currentPageTitle.replace('Display', 'Hide')
    } else {
      updatedPageTitle = currentPageTitle.replace('Hide', 'Display')
    }

    setPageTitle({
      ...pageTitleState,
      [page]: updatedPageTitle
    })
  }

  const dispatchSectionVisibility = (page: string) => {
    const options: any = {
      rxjs: 'section-hide/rxjs',
      contextHook: 'section-hide/context-hook'
    }

    hiddenSectionsState[page] = !hiddenSectionsState[page]

    store.dispatch({ type: `${options[page]}`, payload: hiddenSectionsState[page] })
  }

  const handleClick = (page: string) => {
    updatePageTitle(page)
    dispatchSectionVisibility(page)
  }

  return (
    <section>
      <ReduxSectionVisibilityButtonComp pageTitle={pageTitleState.rxjs} onClick={() => handleClick('rxjs')} />
      <ReduxSectionVisibilityButtonComp
        pageTitle={pageTitleState.contextHook}
        onClick={() => handleClick('contextHook')}
      />
    </section>
  )
}

export default ReduxSectionVisibilityComp
