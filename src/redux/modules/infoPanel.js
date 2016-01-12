const OPEN = 'redux-example/OPEN';
const OPEN_SUCCESS = 'redux-example/OPEN_SUCCESS';
const OPEN_FAIL = 'redux-example/OPEN_FAIL';
const CANCEL = 'redux-example/CANCEL';
const CANCEL_SUCCESS = 'redux-example/CANCEL_SUCCESS';
const CANCEL_FAIL = 'redux-example/CANCEL_FAIL';

const initialState = {
  infoPanel: false
};

export default function infoPanel(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN:
      return {
        ...state
      };
    case OPEN_SUCCESS:
      return {
        ...state,
        infoPanel: true,
        selectedPractitioner: action.result.practitioner,
        selectedTime: action.result.time,
        selectedType: action.result.type
      };
    case OPEN_FAIL:
      return {
        ...state
      };
    case CANCEL:
      return {
        ...state
      };
    case CANCEL_SUCCESS:
    console.log('in action')
      return {
        ...state,
        infoPanel: false
      };
    case CANCEL_FAIL:
      return {
        ...state
      };

    default:
      return state;
  }
}

export function openInfoPanel(practitioner, time, type) {
  return {
    types: [OPEN, OPEN_SUCCESS, OPEN_FAIL],
    promise: () => new Promise((resolve) => resolve({practitioner: practitioner, time: time, type: type}))
  };
}

export function cancel() {
  console.log('in function')
  return {
    types: [CANCEL, CANCEL_SUCCESS, CANCEL_FAIL],
    promise: () => new Promise((resolve) => resolve({}))
  };
}
