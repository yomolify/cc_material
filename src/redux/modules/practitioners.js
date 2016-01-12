const LOADALL = 'redux-example/LOADALL';
const LOADALL_SUCCESS = 'redux-example/LOADALL_SUCCESS';
const LOADALL_FAIL = 'redux-example/LOADALL_FAIL';

const initialState = {
  loaded: false
};

export default function practitioners(state = initialState, action = {}) {
  switch (action.type) {
    case LOADALL:
      return {
        ...state,
        loading: true
      };
    case LOADALL_SUCCESS:
      return {
        ...state,
        data: action.result.Practitioners,
        loading: false,
        loaded: true,
      };
    case LOADALL_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function loadAll() {
  return {
    types: [LOADALL, LOADALL_SUCCESS, LOADALL_FAIL],
    promise: (client) => client.get('/api/v1/practitioners')
  };
}
