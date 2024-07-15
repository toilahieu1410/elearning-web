
import { API_ERP, API_LOCAL, axiosInstance } from './header'

export const _getDanhMuc = async (macongty, username) => {
  const request = await axiosInstance.post(`${API_LOCAL}/api/Api_QuanLyDanhMucApp/LoadDanhSachDanhMuc`, {
    macongty: macongty,
    username: username,
    tukhoa: ''
  })
  return request.data
}

export const _getNhanh = async (id, sobanghi) => {
  const request = await axiosInstance.post(`${API_LOCAL}/api/Api_QuanLyDanhMucApp/LoadDanhSachNhanh`, {
    id: id,
    sobanghi: sobanghi
  })
  return request.data
}

export const _getChiTiet = async (id) => {
  const request = await axiosInstance.post(`${API_LOCAL}/api/Api_QuanLyDanhMucApp/LoadChiTietDanhMuc`, {
    id: id
  })
  return request.data
}