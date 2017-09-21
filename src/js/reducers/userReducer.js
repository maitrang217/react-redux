export default function reducer(state={
  user: {
    id: null,
    name: null,
    age: null,
  },
  fetching: false,
  fetched: false,
  error: null,
}, action) {

  switch (action.type) {
    case "FETCH_USERS": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_USERS_REJECT": {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case "FETCH_USERS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload,
      }
      break;
    }
    case "SET_USER_NAME": {
      return {
        ...state,
        user: {...state, name: action.payload}
      }
      break;
    }
    case "SET_USER_AGE": {
      return {
        ...state,
        user: {...state, age: action.payload}
      }
      break;
    }
  }

  return state;
}
