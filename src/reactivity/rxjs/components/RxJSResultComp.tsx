import { map } from 'rxjs'
import { useEffect, useState } from 'react'
import { incrementDecrement } from '../../common/operations'
import { operationType } from '../utils/subject-manager-instances'

function RxJSResultComp() {
  const operation$ = operationType.subjectAsObservable

  const [state, setState] = useState(0)

  useEffect(() => {
    operation$
      // TODO: is the below TS issue happening in VSCOde?
      .pipe(map((operation: string) => incrementDecrement(operation, state)))
      .subscribe((newValue: number) => setState(newValue))

    // TODO: unsubscribe from BehaviorSubject as Observable
    return () => console.log('Check if operation$ should be destroyed')
  })

  return <p> Value: {state}</p>
}

export default RxJSResultComp
