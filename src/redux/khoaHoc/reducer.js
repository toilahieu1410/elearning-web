import {
  LOAD_DANH_SACH_KHOA_HOC,
  LOAD_DANH_SACH_BAI_HOC,
  LOAD_CHI_TIET_KHOA_HOC} from '../type'

const initialState = {
  listDanhSachKhoaHoc: [],
  listDanhSachBaiHoc: [],
  listChiTietKhoaHoc: {}
}

const khoaHoc = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DANH_SACH_KHOA_HOC: 
      return {
        ...state,
        listDanhSachKhoaHoc: action.data
      }
    case LOAD_DANH_SACH_BAI_HOC:
      return {
        ...state,
        listDanhSachBaiHoc: action.data
      }
    case LOAD_CHI_TIET_KHOA_HOC:
      return {
        ...state,
        listChiTietKhoaHoc: action.data
      }
    default: 
      return state
  }
}

export default khoaHoc