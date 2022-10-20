/* ======= ======= ======= ======= ======= */
import HeaderTitleComp from '../common/HeaderTitleComp'
import ReduxSectionVisibilityComp from './components/ReduxSectionVisibilityComp'
/* ======= ======= ======= ======= ======= */

function ReduxPage() {
  const borderStyle = {
    border: 'black 1px dotted'
  }

  return (
    <section style={borderStyle}>
      <HeaderTitleComp title="Display Sections via Redux" />
      <ReduxSectionVisibilityComp />
      <br />
    </section>
  )
}

export default ReduxPage
