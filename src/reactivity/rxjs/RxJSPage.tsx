import RxJSResultComp from './RxJSResultComp'
import RxJSIncrementComp from './RxJSIncrementComp'
import RxJSDecrementComp from './RxJSDecrementComp'

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
