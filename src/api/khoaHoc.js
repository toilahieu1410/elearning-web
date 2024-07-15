import { API_ERP_DATA, API_LOCAL, axiosInstance } from "./header";

export const _loadDanhSachKhoaHoc = async (macongty, username) => {
  const request = await axiosInstance.post(`${API_ERP_DATA}/api/Api_Elearning/LoadDanhSachKhoaHoc`, {
    macongty: macongty,
    username: username,
    tukhoa: ''
  })
  return request.data
}

export const _loadDanhSachBaiHoc = async (id, sobanghi) => {
  const request = await axiosInstance.post(`${API_ERP_DATA}/api/Api_Elearning/LoadDanhSachBaiHocCon`, {
    id: id,
    sobanghi: sobanghi
  })
  return request.data
}

export const _loadChiTietKhoaHoc = async (id) => {
  const request = await axiosInstance.post(`${API_ERP_DATA}/api/Api_Elearning/LoadChiTietKhoaHoc`, {
    id: id
  })
  return request.data
}