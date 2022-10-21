import plusIcon from '../../assets/plus-icon.svg'
import { GetOperationContext } from '../utils/operation-context'

function ContextHookIncrementComp() {
  const { incrementDecrement } = GetOperationContext()
  return (
    <button onClick={() => incrementDecrement('increment')}>
      <img src={plusIcon} alt="Minus icon" />
    </button>
  )
}

export default ContextHookIncrementComp
