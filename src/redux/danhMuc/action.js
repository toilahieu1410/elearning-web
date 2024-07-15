import {
  _getDanhMuc,
  _getNhanh,
  _getChiTiet
} from '../../api/danhMuc'

import { _getUser } from '../../api/auth'

import {
  GET_DANH_MUC,
  GET_NHANH,
  GET_CHI_TIET,
  GET_USER
} from '../type'

export const getDanhMuc = (macongty, username) => async dispatch => {
  console.log(macongty.username)
  try {
    _getDanhMuc(macongty, username).then(async (res) => {
      return dispatch({ type: GET_DANH_MUC, data: res })
     
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getNhanh = (id, sobanghi) => async dispatch => {
  try {
    _getNhanh(id, sobanghi).then(async (res) => {
      return dispatch({ type: GET_NHANH, data: res })
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getChiTiet = (id) => async dispatch => {
  try {
    _getChiTiet(id).then(async (res) => {
      return dispatch({ type: GET_CHI_TIET, data: res })
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const getUser = (username) => async dispatch => {
  try {
    _getUser(username).then(async (res) => {
      return dispatch({ type: GET_USER, data: res })
    })
  } catch (error) {
    throw new Error(error)
  }
}