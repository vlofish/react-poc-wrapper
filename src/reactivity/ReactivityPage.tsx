import ContextHookPage from './context-hook/ContextHookPage'
import ReduxPage from './redux/ReduxPage'
import RxJSPage from './rxjs/RxJSPage'

function ReactivityPage() {
  return (
    <section>
      <header>
        <h2> Reactivity </h2>
      </header>
      <RxJSPage />
      <ContextHookPage />
      <ReduxPage />
    </section>
  )
}

export default ReactivityPage
