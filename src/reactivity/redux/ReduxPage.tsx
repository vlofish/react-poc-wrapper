/* ======= ======= ======= ======= ======= */
import HeaderTitleComp from '../common/HeaderTitleComp'
import ReduxPageHandlerComp from './ReduxPageHandlerComp'
/* ======= ======= ======= ======= ======= */

function ReduxPage() {
  const borderStyle = {
    border: 'black 1px dotted'
  }

  return (
    <section style={borderStyle}>
      <HeaderTitleComp title="Redux" />
      <ReduxPageHandlerComp pageTitle="RxJS" />
      <ReduxPageHandlerComp pageTitle="Context" />
      <section></section>
    </section>
  )
}

export default ReduxPage
