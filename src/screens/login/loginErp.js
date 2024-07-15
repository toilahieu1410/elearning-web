import React from 'react'
import { _getLogin } from '../../api/auth'
import { useParams } from 'react-router-dom'
import useToken from '../../utilities/useToken'
import { toast } from 'react-toastify'

const LoginErp = () => {

  const {username, password} = useParams()
  const { token, setToken } = useToken()

  // http://elearning.hoplong.com/login-erp/inte026_hl/1234567
  
  const handleLogin = async () => {
    _getLogin(username, password)
      .then((res) => {
        if(res.notification.indexOf('Đăng nhập thành công') !== -1) {
          const token = { 
            username: res.user.USERNAME,
            macongty: res.user.MA_CONG_TY, 
            hoTen: res.user.HO_VA_TEN, 
            avatar: res.user.AVATAR,
            admin: res.user.IS_ADMIN,
            lock: res.user.LOCK
          }
          setToken(token)
        } else {
          toast.success('Sai tài khoản hoặc mật khẩu!')
          setTimeout(() => {
            window.location.href = `/login`
            }, 200);
        }
      })
  }

  handleLogin()

  return (
    <div>Login Erp</div>
  )
}

export default LoginErp