import { operationType } from '../utils/subject-manager-instances'

function RxJSIncrementComp() {
  const handleClick = () => {
    operationType.subjectValue = 'increment'
  }

  return <button onClick={handleClick}> Increment </button>
}

export default RxJSIncrementComp
