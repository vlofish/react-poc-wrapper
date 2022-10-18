import { operationType } from '../utils/subject-manager-instances'

function RxJSDecrementComp() {
  const handleClick = () => {
    operationType.subjectValue = 'decrement'
  }

  return <button onClick={handleClick}> Decrement </button>
}

export default RxJSDecrementComp
