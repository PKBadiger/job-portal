/* eslint-disable no-case-declarations */
import {
  GET_JOB_LIST,
  GET_AUTO_COMPLETE_LIST,
  SELECTED_JOB_DATA,
  SEARCH_BY_DESIGNATION,
} from '../actionTypes/types';

import profileData from '../../utils/profile_data';

const initialState = {
  isLoading: true,
  jobList: null,
  selectedJobData: null,
};

const jobPortalReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_JOB_LIST:
      return { ...state, isLoading: false, jobList: profileData };
    case GET_AUTO_COMPLETE_LIST:
      return { ...state };
    case SELECTED_JOB_DATA:
      return { ...state, selectedJobData: payload };
    case SEARCH_BY_DESIGNATION:
      const filterBydesign = profileData.filter((profile) => profile.jobTitle === payload);
      const filterBySkills = profileData.filter((profile) => profile.skills.includes(payload));

      return { ...state, jobList: [...filterBydesign, ...filterBySkills] };
    default:
      return state;
  }
};

export default jobPortalReducer;
