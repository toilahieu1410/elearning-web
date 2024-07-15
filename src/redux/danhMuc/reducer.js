import {
  GET_DANH_MUC,
  GET_NHANH,
  GET_CHI_TIET,
  GET_USER
} from '../type'

const initialState = {
  listDanhMuc: [],
  listNhanh: [],
  detail: {},
  detailUser: {}
}

const danhMuc = ( state = initialState, action ) => {
  switch (action.type) {
    case GET_DANH_MUC:
      return {
        ...state,
        listDanhMuc: action.data
      }
    case GET_NHANH:
      return {
        ...state,
        listNhanh: action.data
      }
    case GET_CHI_TIET:
      return {
        ...state,
        detail: action.data
      }
    case GET_USER:
      return {
        ...state,
        detailUser: action.data
      }
    default: {
      return state
    }
  }
}

export default danhMuc