import { get } from '../api'
import {
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_FAILED,
} from '../actionTypes'


export function getContactsSuccess(data) {
  return {
    type: GET_CONTACTS_SUCCESS,
    list: data,
  }
}
export function getContactsLoading() {
  return {
    type: GET_CONTACTS_LOADING,
  }
}
export function getContactsFailed(error) {
  return {
    type: GET_CONTACTS_FAILED,
    listError: error,
  }
}


export function getContacts(params = {}) {
  return (dispatch) => {
    dispatch(getContactsLoading())
    get('/contactss.json', params)
      .then(({ data }) => dispatch(getContactsSuccess(data)))
      .catch(err => dispatch(getContactsFailed(err.message)))
  }
}
