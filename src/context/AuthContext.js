import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return true;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // make api request to signup with email and passowrd

    // if signup, modify out state, and say that we are authenticated

    // if failed, we probably show a error message
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // make api request to signin with email and passowrd

    // handle success

    // handle failed
  };
};

const signout = (dispatch) => {
  return () => {
    // make api request to signout user

    // handle signout success

    // handle signout failed
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signin,
    signup,
    signup,
  },
  { isSignedIn: false }
);