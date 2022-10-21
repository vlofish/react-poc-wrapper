import { createStore } from 'redux'
import { ActionName } from './enums'

const initialStoreState = {
  hideRxJSSection: false,
  hideContextSection: false
}

function sectionHideReducer(state = initialStoreState, action: { type: string; payload: any }) {
  switch (action.type) {
    case ActionName.HideRxJS:
      return { ...state, hideRxJSSection: action.payload }
    case ActionName.HideContextHook:
      return { ...state, hideContextSection: action.payload }
    default:
      return state
  }
}

export const store = createStore(sectionHideReducer)
