import minusIcon from '../../assets/minus-icon.svg'
import { GetOperationContext } from '../utils/operation-context'

function ContextHookDecrementComp() {
  const { incrementDecrement } = GetOperationContext()
  return (
    <button onClick={() => incrementDecrement('decrement')}>
      <img src={minusIcon} alt="Minus icon" />
    </button>
  )
}

export default ContextHookDecrementComp
