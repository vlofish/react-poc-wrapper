import { operationType } from '../utils/subject-manager-instances'
import plusIcon from '../../assets/plus-icon.svg'

function RxJSIncrementComp() {
  const handleClick = () => {
    operationType.subjectValue = 'increment'
  }

  return (
    <button onClick={handleClick}>
      <img src={plusIcon} alt="Plus icon" />
    </button>
  )
}

export default RxJSIncrementComp
