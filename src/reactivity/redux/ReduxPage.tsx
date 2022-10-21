/* ======= ======= ======= ======= ======= */
import HeaderTitleComp from '../common/HeaderTitleComp'
import ReduxVisibilitiesComp from './components/ReduxVisibilitiesComp'
/* ======= ======= ======= ======= ======= */

function ReduxPage() {
  const borderStyle = {
    border: 'black 1px dotted'
  }

  return (
    <section style={borderStyle}>
      <HeaderTitleComp title="Display Sections via Redux" />
      <ReduxVisibilitiesComp />
      <br />
    </section>
  )
}

export default ReduxPage
