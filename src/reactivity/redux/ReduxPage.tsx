/* ======= ======= ======= ======= ======= */
import { store } from '../../store/store'
import HeaderTitleComp from '../common/HeaderTitleComp'
import ReduxPageHandlerComp from './ReduxPageHandlerComp'
/* ======= ======= ======= ======= ======= */

const hiddenSectionsState: any = {
  rxjs: false,
  context: false
}

function ReduxPage() {
  const borderStyle = {
    border: 'black 1px dotted'
  }

  const handleClick = (option: string) => {
    const options: any = {
      rxjs: 'section-hide/rxjs',
      context: 'section-hide/context-hook'
    }

    hiddenSectionsState[option] = !hiddenSectionsState[option]

    store.dispatch({ type: `${options[option]}`, payload: hiddenSectionsState[option] })
  }

  return (
    <section style={borderStyle}>
      <HeaderTitleComp title="Redux" />
      <ReduxPageHandlerComp pageTitle="RxJS" onClick={() => handleClick('rxjs')} />
      <ReduxPageHandlerComp pageTitle="Context" onClick={() => handleClick('context')} />
      <section></section>
    </section>
  )
}

export default ReduxPage
