import { combineReducers } from 'redux';
import jobPortalReducer from './reducers/job_List_reducer';

const rootReducer = combineReducers({
  jobPortalData: jobPortalReducer,
});

export default rootReducer;
