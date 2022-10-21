import { operationType } from '../utils/subject-manager-instances'
import minusIcon from '../../assets/minus-icon.svg'

function RxJSDecrementComp() {
  const handleClick = () => {
    operationType.subjectValue = 'decrement'
  }

  return (
    <button onClick={handleClick}>
      <img src={minusIcon} alt="Minus icon" />
    </button>
  )
}

export default RxJSDecrementComp
