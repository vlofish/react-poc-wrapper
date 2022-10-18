import RxJSResultComp from './components/RxJSResultComp'
import RxJSIncrementComp from './components/RxJSIncrementComp'
import RxJSDecrementComp from './components/RxJSDecrementComp'

function RxJSPage() {
  const borderStyle = {
    border: 'black 1px dotted'
  }
  return (
    <section style={borderStyle}>
      <header>
        <h3> RxJS </h3>
      </header>

      <section>
        <RxJSDecrementComp />
        <RxJSIncrementComp />
        <RxJSResultComp />
      </section>
    </section>
  )
}

export default RxJSPage
