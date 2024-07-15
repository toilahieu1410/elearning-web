import React from 'react'
import { Row, Col, Form } from "reactstrap"
import { Link } from 'react-router-dom'
import { FaGooglePlay, FaApple, } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'
const Footer = () => {

  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className='container'>

          <Row>
            <Col lg='2' md='6'>
              <div className="footer-widget footer-about">
                <h2 className="footer-title">Giới thiệu</h2>
                <div className="footer-about-content">
                  <p>87 Lĩnh Nam - Hoàng Mai </p>
                </div>
              </div>
            </Col>
            <Col lg='2' md='6'>
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Góc học viên</h2>
                <ul>
                  <li><Link to={'#'}>Tìm kiếm</Link></li>
                  <li><Link to={'#'}>Bài đã học</Link></li>
                  <li><Link to={'#'}>Bài được gán</Link></li>
                  <li><Link to={'#'}>Bài thi</Link></li>
                </ul>
              </div>
            </Col>
            <Col lg='2' md='6'>
              <div className="footer-widget footer-menu">
                <h2 className="footer-title">Góc chuyên gia</h2>
                <ul>
                  <li><Link to={'#'}>Bài giảng của tôi</Link></li>
                  <li><Link to={'#'}>Phản hồi</Link></li>
                </ul>
              </div>
            </Col>
            <Col lg='2' md='6'>
              <div className="footer-widget footer-social">
                <h2 className="footer-title">Góp ý</h2>

              </div>
            </Col>
            <Col lg='3' md='6'>
              <div className="footer-widget footer-social">
                <h2 className="footer-title">Download App</h2>
                <a className='other-link hover-pointer'>
                  <div className='other-store-app'>
                    <div className='other-app-icon'>
                      <FaGooglePlay />
                    </div>
                    <div className='other-app-caption'>
                      <h5 className='mb-0'>Google Play</h5>
                      <p className='mb-0'>Get it now</p>
                    </div>
                  </div>
                </a>
                <a className='other-link hover-pointer'>
                  <div className='other-store-app'>
                    <div className='other-app-icon'>
                      <FaApple />
                    </div>
                    <div className='other-app-caption'>
                      <h5 className='mb-0'>App store</h5>
                      <p className='mb-0'>Now it available</p>
                    </div>
                  </div>
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="copyright">
            <Row>
              <Col md='6' >
                <div className="copyright-text text-start">
                  <p className='mb-0'>Hỗ trợ online - 0963.235.363</p>
                </div>
              </Col>
              <Col md='6'>
                <div className="copyright-text text-md-end">
                  <p className='mb-0'>© 2021 Hoplongtech E-learning. All rights reserved.</p>
                </div>
              </Col>
            </Row>
          </div>

        </div>
      </div>
      <a href="https://chat.zalo.me/?phone=0866676616" id="linkzalo" target="_blank" rel="noopener noreferrer"><div id="fcta-zalo-tracking" className="fcta-zalo-mess">
        <span id="fcta-zalo-tracking">Chat hỗ trợ</span></div><div className="fcta-zalo-vi-tri-nut"><div id="fcta-zalo-tracking" className="fcta-zalo-nen-nut"><div id="fcta-zalo-tracking" className="fcta-zalo-ben-trong-nut"> <SiZalo /> </div><div id="fcta-zalo-tracking" className="fcta-zalo-text">Chat ngay</div></div></div></a>
    </footer>
  )
}

export default Footer