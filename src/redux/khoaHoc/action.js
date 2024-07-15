import { 
  _loadDanhSachKhoaHoc,
  _loadDanhSachBaiHoc, 
  _loadChiTietKhoaHoc } from '../../api/khoaHoc'

import { 
  LOAD_DANH_SACH_KHOA_HOC, 
  LOAD_DANH_SACH_BAI_HOC, 
  LOAD_CHI_TIET_KHOA_HOC } from '../type'

export const loadDanhSachKhoaHoc = (macongty, username) => async dispatch => {
  try {
    _loadDanhSachKhoaHoc(macongty, username).then(async (res) => {
      return dispatch({ type: LOAD_DANH_SACH_KHOA_HOC, data: res })
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const loadDanhSachBaiHoc = (id, sobanghi) => async dispatch => {
  try {
    _loadDanhSachBaiHoc(id, sobanghi).then(async (res) => {
      return dispatch({ type: LOAD_DANH_SACH_BAI_HOC, data: res })
    })
  } catch (error) {
    throw new Error(error)
  }
}

export const loadChiTietKhoaHoc = (id) => async dispatch => {
  try {
    _loadChiTietKhoaHoc(id).then(async (res) => {
      return dispatch({ type: LOAD_CHI_TIET_KHOA_HOC, data: res })
    })
  } catch (error) {
    throw new Error(error)
  }
}