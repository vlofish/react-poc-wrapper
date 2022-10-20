import { createStore } from 'redux'

const defaultState = {
  hideRxJSSection: false,
  hideContextSection: false
}

function sectionHideReducer(state = defaultState, action: { type: string; payload: any }) {
  switch (action.type) {
    case 'section-hide/rxjs':
      return { ...state, hideRxJSSection: action.payload }
    case 'section-hide/context-hook':
      return { ...state, hideContextSection: action.payload }
    default:
      return state
  }
}

export const store = createStore(sectionHideReducer)
