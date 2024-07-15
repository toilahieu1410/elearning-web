import axios from "axios"

export const API_ERP = 'http://app.hoplong.com'
export const API_ERP_DATA = 'http://sales.hoplong.com'
export const API_LOCAL = 'http://10.10.15.157:1111'

const authHeader = () => {

  const tokenString = sessionStorage.getItem('token')
  const tokenJson  = JSON.parse(tokenString)

  if(tokenJson) {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
}

export const axiosInstance = axios.create({
  headers: authHeader()
})