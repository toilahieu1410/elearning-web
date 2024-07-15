import React from "react"
import { Row, Col} from 'reactstrap'
import { FaRegCalendar, FaForward, FaUserAlt} from 'react-icons/fa'

const TieuDeBaiHoc = (props) => {

  const {listChiTietKhoaHoc} = props

  return (
    <div className='section-header'>
      <div className='container'>
        <Row className='align-items-center'>
          <Col md={4} lg={4}>
            <div className='image-property'>
              <img className="pro_img img-fluid w100" src={listChiTietKhoaHoc.LINK_ANH_BACKGROUND} alt="7.jpg" />
            </div>
          </Col>
          <Col md={8} lg={8}>
            <div className='detail-course d-block w-100 position-relative'>
              <div className='detail-course-header'>
                <h2 className='detail-course-header-title fw-bolder'>{listChiTietKhoaHoc.TIEU_DE_KHOA_HOC}</h2>
                <ul className='list-unstyled'>
                  <li><FaRegCalendar /><span>10 - 20 tuần</span></li>
                  <li><FaForward /><span>02 bài học</span></li>
                  <li><FaUserAlt /><span>502 người đã học</span></li>
                </ul>
                <p>{listChiTietKhoaHoc.NOI_DUNG_KHOA_HOC}</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default TieuDeBaiHoc