import {
  GET_JOB_LIST,
  GET_AUTO_COMPLETE_LIST,
  SELECTED_JOB_DATA,
  SEARCH_BY_DESIGNATION,
} from '../actionTypes/types';

export const getJobList = () => ({
  type: GET_JOB_LIST,
});

export const getAutoCompleteList = () => ({
  type: GET_AUTO_COMPLETE_LIST,
});

export const getSelectedJobData = (data) => ({
  type: SELECTED_JOB_DATA,
  payload: data,
});

export const searchByDesignation = (design) => ({
  type: SEARCH_BY_DESIGNATION,
  payload: design,
});
