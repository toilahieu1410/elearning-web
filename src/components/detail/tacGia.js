import React, { useEffect, useState } from "react"
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import { TiVideoOutline, TiArrowForward, TiUserOutline } from 'react-icons/ti'
import {_getUser} from '../../api/auth'

const TacGia = (props) => {

  const {nguoiThuyetTrinh} = props;

  const [user, setUser] = useState(null)

  useEffect(() => {
    _getUser(nguoiThuyetTrinh).then((res) => {
      setUser(res)
    })
  }, [nguoiThuyetTrinh])

  return (
    <div className='single-instructor'>
      {
        user && (
          <div>
            <div className='single-intructor-image'>
              <a href='#'>
                {
                  user.AVATAR ? (
                    <img src={`http://sales.hoplong.com/Content/Images/Avatar/${user.AVATAR}`} className='img-fluid ' alt="avatar" />
                  ) : (
                    <img src={user} className='img-fluid ' alt="avatar" />
                  )
                }
              </a>
            </div>
            <div className='single-instructor-content'>
              <h5>{user.HO_VA_TEN}</h5>
              <ul className="instructor_info list-unstyled">
                <li><TiVideoOutline size={20} /><span>{user.TEN_PHONG_BAN}</span></li>
                <li><TiArrowForward size={20} /><span>02 Lectures</span></li>
                <li><TiUserOutline size={20} /><span>{user.EMAIL_CONG_TY}</span></li>
              </ul>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
              <ul className="social_network list-unstyled">
                <li><a href='#'><FaFacebookF size={14} /></a></li>
                <li><a href='#'><FaInstagram size={14} /></a></li>
                <li><a href='#'><FaTwitter size={14} /></a></li>
              </ul>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default TacGia