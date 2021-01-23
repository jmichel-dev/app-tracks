import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    default:
      return true;
  }
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' })
}

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    const token = response.data.token;
    await AsyncStorage.setItem('token', token);

    dispatch({ type: 'signin', payload: token });

    navigate('TrackList');
      
  } catch (err) {
    console.log(err);
    dispatch({ 
      type: 'add_error', 
      payload: 'Something went wrong with signup' 
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    const token = response.data.token;

    await AsyncStorage.setItem('token', token);
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
        
  } catch (err) {
    console.log(err);
    dispatch({ 
      type: 'add_error', 
      payload: 'Something went wrong with signup' 
    });
  }
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
    signout,
    clearErrorMessage,
  },
  { token: null, errorMessage: '' }
);