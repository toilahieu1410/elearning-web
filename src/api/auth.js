import { API_ERP, API_LOCAL, axiosInstance } from './header'

export const _getLogin = async (username, password) => {
  const request = await axiosInstance.get(`${API_ERP}/api/Api_NhanVien/LoginERP/${username}/${password}`)
  return request.data
}

export const _getUser = async (username) => {
  const request = await axiosInstance.get(`${API_ERP}/api/Api_NhanVien/GetChiTietNhanVien/${username}`)
  return request.data
}