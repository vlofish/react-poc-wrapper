/* ======= ======= ======= ======= ======= */
import { GetOperationContext } from '../utils/operation-context'
/* ======= ======= ======= ======= ======= */

function ContextHookResultComp() {
  const { value } = GetOperationContext()
  return <p> Value: {value} </p>
}

export default ContextHookResultComp
