/* ======= ======= ======= ======= ======= */
import ReduxPage from './redux/ReduxPage'
import ReactivityComp from './ReactivityComp'
/* ======= ======= ======= ======= ======= */

function ReactivityPage() {
  return (
    <section>
      <header>
        <h2> Reactivity </h2>
      </header>
      <div>
        <ReduxPage />
        <ReactivityComp />
      </div>
    </section>
  )
}

export default ReactivityPage
