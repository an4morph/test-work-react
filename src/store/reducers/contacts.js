import {
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_FAILED,
} from '../actionTypes'

const initialState = {}

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_CONTACTS_SUCCESS:
    return {
      ...state,
      list: action.list,
      areLoading: false,
      areFailed: false,
      listError: null,
    }
  case GET_CONTACTS_LOADING:
    return {
      ...state,
      areLoading: true,
      areFailed: false,
      listError: null,
    }
  case GET_CONTACTS_FAILED:
    return {
      ...state,
      areFailed: true,
      areLoading: false,
      listError: action.listError,
    }
  default: return state
  }
}

export default contactReducer

