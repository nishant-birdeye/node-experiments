import { ACCOUNT_ACTIONS } from './account_actions';

const INITIAL_STATE = {
  user: null,
  noSessionFound: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case ACCOUNT_ACTIONS.SET_SESSION_USER:
      return { ...state, user: action.payload.user, noSessionFound: false };

    case ACCOUNT_ACTIONS.NO_SESSION_FOUND:
      return { ...state, user: null, noSessionFound: true };

    default:
      return state;
  }
};

export default reducer;
