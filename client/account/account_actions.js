export const ACCOUNT_ACTIONS = {
  CHECK_SESSION : 'ACCOUNT_ACTIONS/CHECK_SESSION',
  SET_SESSION_USER : 'ACCOUNT_ACTIONS/SET_SESSION_USER',
  NO_SESSION_FOUND : 'ACCOUNT_ACTIONS/NO_SESSION_FOUND',
};

export const checkSession   = () => ({ type: ACCOUNT_ACTIONS.CHECK_SESSION });
export const noSessionFound   = () => ({ type: ACCOUNT_ACTIONS.NO_SESSION_FOUND });
export const setSessionUser = payload => ({ type: ACCOUNT_ACTIONS.SET_SESSION_USER, payload });
