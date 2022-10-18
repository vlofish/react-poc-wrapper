import RxJSResultComp from './components/RxJSResultComp'
import RxJSIncrementComp from './components/RxJSIncrementComp'
import RxJSDecrementComp from './components/RxJSDecrementComp'

function RxJSPage() {
  return (
    <section>
      <header> RxJS </header>

      <RxJSIncrementComp />
      <RxJSDecrementComp />
      <RxJSResultComp />
    </section>
  )
}

export default RxJSPage
