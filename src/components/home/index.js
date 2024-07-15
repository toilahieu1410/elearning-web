import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'reactstrap'
import { FaCaretDown, FaCaretUp, FaRegEye, FaRegClock, FaRegStar, FaStepForward } from 'react-icons/fa'
import { TiCalendar, TiVideoOutline, TiWatch, TiWeatherCloudy } from 'react-icons/ti'
import Carousel from "react-multi-carousel"
import ScrollAnimation from "react-animate-on-scroll"

import user2 from '../../assets/img/user2.jpg'

/* List image khoa hoc chung */
import imgEdu1 from '../../assets/img/img-icon/img-1.png'
/* END */

/* List image khoa hoc duoc gan */
import imgList1 from '../../assets/img/co-1.jpg'
import imgList2 from '../../assets/img/co-2.jpg'
import imgList3 from '../../assets/img/co-3.jpg'
import imgList4 from '../../assets/img/co-4.jpg'
import imgList5 from '../../assets/img/co-5.jpg'
/* END */
import { loadDanhSachKhoaHoc } from '../../redux/khoaHoc/action'

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1800 },
    items: 3,
    slidesToSlide: 1
  },
  bigTablet: {
    breakpoint: { max: 1199, min: 767 },
    items: 2,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 991, min: 767 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
}

const dataGan = [
  {
    title: 'PMP Exam Prep Seminar - PMBOK Guide 6',
    image: imgList1,
    imageAuthor: user2,
    timeUpdate: '11/11/2020',
    timeVideo: '6h 30min',
    countView: '800 Views',
    rate: '4.7 Reviews',
    userUpdate: 'Minh Hieu',
    sumVideo: '42 lectures'
  },
  {
    title: 'Tableau For Beginners: Get CA Certified, Grow Your Career',
    image: imgList2,
    imageAuthor: user2,
    timeUpdate: '10/06/2020',
    timeVideo: '6h 30min',
    countView: '800 Views',
    rate: '4.7 Reviews',
    userUpdate: 'Minh Hieu',
    sumVideo: '42 lectures'
  },
  {
    title: 'The Complete Business Plan Course (Includes 50 Templates)',
    image: imgList3,
    imageAuthor: user2,
    timeUpdate: '23/11/2020',
    timeVideo: '6h 30min',
    countView: '800 Views',
    rate: '4.7 Reviews',
    userUpdate: 'Minh Hieu',
    sumVideo: '42 lectures'
  },
  {
    title: 'An Entire MBA In 1 Course:Award Winning Business School Prof',
    image: imgList4,
    imageAuthor: user2,
    timeUpdate: '23/11/2020',
    timeVideo: '6h 30min',
    countView: '800 Views',
    rate: '4.7 Reviews',
    userUpdate: 'Minh Hieu',
    sumVideo: '42 lectures'
  },
  {
    title: 'The Complete Financial Analyst Course 2020',
    image: imgList5,
    imageAuthor: user2,
    timeUpdate: '23/11/2020',
    timeVideo: '6h 30min',
    countView: '800 Views',
    rate: '4.7 Reviews',
    userUpdate: 'Minh Hieu',
    sumVideo: '42 lectures'
  },

]

const Homepage = (props) => {

  const dispatch = useDispatch()

  const {userInfo} = props
  const listDanhMuc = useSelector((store) => store.danhMuc.listDanhMuc)
  const listDanhSachKhoaHoc = useSelector((store) => store.khoaHoc.listDanhSachKhoaHoc)

  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)

  const listDataCreate = listDanhSachKhoaHoc.filter((item) => item.PHAN_LOAI_KHOA_HOC === 'Chung')
  const listDataPar = listDanhSachKhoaHoc.filter((item) => item.PHAN_LOAI_KHOA_HOC === 'Phòng ban')
  useEffect(() => {
    dispatch(loadDanhSachKhoaHoc(userInfo.macongty, userInfo.username))
  }, [])

  return (
    <>
      <div className='section-content'>
        <div className='container'>
          <div className='list-banner'>
            <div className='banner-content'>
              <ScrollAnimation
                animateIn="bounceInLeft"
                animateOut="fadeOut"
                duration={1.2}
                delay={0}
                animateOnce={true}
              >
                <div className='banner-heading'>
                  <h1 >HOPLONG E-LEARNING</h1>
                  <p>A Product of LnD Department</p>
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="fadeOut"
                duration={1.2}
                delay={0}
                animateOnce={true}
              >
                <div className="banner-forms">
                  <form className="banner-form" action="#">
                    <Row>
                      <Col className="input-group-form form-style" md='9'>
                        <input className="input-style-form form-control" type="text" placeholder="Tìm kiếm khóa học" name="going" />
                      </Col>
                      <Col md='3'>
                        <Button className="btn button-form" type="button">Search Now</Button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="banner-footer">
            <div className='container'>
              <div className="banner-details">
                <div className='flex-1'>
                  <ScrollAnimation animateIn='flipInY'
                    duration={0.8}
                    delay={0}
                    animateOut='flipOutY'
                    animateOnce={true}
                  >
                    <div className="banner-card d-flex align-items-center animated fadeInDown">
                      <div className="banner-count">
                        <h3 className='icon-learning'><TiVideoOutline /></h3>
                      </div>
                      <div className="banner-contents">
                        <h2><span>10</span>&nbsp;Chuyên gia</h2>
                        <Link to={'#'}>Nam libero tempore, cum soluta and nobis est eligendi option</Link>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className='flex-1 m-r-10'>
                  <ScrollAnimation animateIn='flipInY'
                    duration={0.8}
                    delay={0}
                    animateOut='flipOutY'
                    animateOnce={true}
                  >
                    <div className="banner-card d-flex align-items-center animated fadeInDown">
                      <div className="banner-count">
                        <h3 className='icon-learning'><TiWatch /></h3>
                      </div>
                      <div className="banner-contents">
                        <h2><span>20</span>&nbsp;Bài học</h2>
                        <Link to={'#'}>Nam libero tempore, cum soluta and nobis est eligendi option</Link>
                      </div>
                    </div>
                  </ScrollAnimation>

                </div>
                <div className='flex-1'>
                  <ScrollAnimation animateIn='flipInY'
                    duration={0.8}
                    delay={0}
                    animateOut='flipOutY'
                    animateOnce={true}
                  >
                    <div className="banner-card d-flex align-items-center animated fadeInDown">
                      <div className="banner-count">
                        <h3 className='icon-learning'><TiWeatherCloudy /></h3>
                      </div>
                      <div className="banner-contents">
                        <h2><span>100</span>&nbsp;Video</h2>
                        <Link to={'#'}>Nam libero tempore, cum soluta and nobis est eligendi option</Link>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='list-courses'>
        <div className='container'>
      {/* Khoa hoc chung */}
      {
            listDataCreate && (
              <>
                <div className='all-course-title'>
                  <h3 className='text-center my-4'><span className="text-weight">Khóa học chung</span> </h3>
                </div>
                <Row>
                  {
                    listDataCreate.map((item, index) => (
                      !show ? (
                        index < 6 && <Item key={index} item={item} />
                      ) : (
                        <Item key={index} item={item} />
                      )
                    ))
                  }

                  {
                    listDataCreate.length > 6 && (
                      <div className='text-center'>
                        {!show ? (
                          <button className='btn btn-course' onClick={() => setShow(!show)}>Xem thêm<FaCaretDown className='right-nav-white' /></button>
                        ) : (
                          <button className='btn btn-course' onClick={() => setShow(!show)}>Thu gọn<FaCaretUp className='right-nav-white' /></button>
                        )}
                      </div>
                    )
                  }
                </Row>
              </>
            )
          }
        </div>
    
          <div className='mt-5'>
            {/* Khoa hoc cua toi */}
            {
              listDataPar && (
                <>
                <div className='all-courses'>
                  <div className='container'>
                  <div className='all-course-title'>
                    <h3 className='text-center pt-5 pb-3'><span className="text-weight">Khóa học của tôi</span> </h3>
                  </div>
                  <Row>
                    {
                      listDataPar.map((item, index) => (
                        !show1 ? (
                          index < 6 && <Item1 key={index} item={item} />
                        ) : (
                          <Item1 key={index} item={item} />
                        )
                      ))
                    }

                    {
                      listDataPar.length > 6 && (
                        <div className='text-center pb-3'>
                          {!show1 ? (
                            <button className='btn btn-course' onClick={() => setShow1(!show1)}>Xem thêm<FaCaretDown className='right-nav-white' /></button>
                          ) : (
                            <button className='btn btn-course' onClick={() => setShow1(!show1)}>Thu gọn<FaCaretUp className='right-nav-white' /></button>
                          )}
                        </div>
                      )
                    }
                  </Row>
                  </div>
            
                </div>
            
                </>
              )
            }

          </div>

          <div className='mt-5'>
            <div className='container'>
            <div className='all-course-title'>
              <h3 className='text-center my-4'><span className="text-weight">Khóa học được gán</span></h3>
            </div>
            <Carousel minimumTouchDrag={50} containerClass="carousel-container" infinite={true} responsive={responsive} transitionDuration={500} autoPlay={false} removeArrowOnDeviceType={["mobile"]}>
              {dataGan.map((item, index) => (
                <Col key={index}>
                  <ScrollAnimation animateIn='flipInY '
                    duration={1}
                    delay={0.3}
                    animateOnce={true}>
                    <div className='edu-block'>
                      <div className='edu-image'>
                        <a href="#">
                          <img src={item.image} className='img-fluid' />
                        </a>
                      </div>
                      <div className='edu-content'>
                        <div className='edu-title'>
                          <h6>{item.title}</h6>
                        </div>
                        <div className='edu-info'>
                          <ul className='list-unstyled m-0 d-flex align-items-center justify-content-between'>
                            <li><FaRegEye /><span>{item.countView}</span></li>
                            <li><FaRegClock /><span>{item.timeVideo}</span></li>
                            <li><FaRegStar color={'orange'} /><span>{item.rate}</span></li>
                          </ul>
                        </div>
                        <div className='edu-footer'>
                          <div className='edu-author'>
                            <div className='edu-author-image'>
                              <a href='#'>
                                <img className='img-fluid' src={item.imageAuthor} />
                              </a>
                            </div>
                            <h6>{item.userUpdate}</h6>
                          </div>
                          <div className='edu-lecture'>
                            <h6 className='mb-0'><FaStepForward color={'#1ead6b'} /></h6>
                            <span>{item.sumVideo}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </Col>
              ))}
            </Carousel >
            </div>
  
          </div>
     
        <div className='inverse-theme'>
          <div className='container'>
            <Row className='zIndex justify-content-center'>
              <Col md={8}>
                <ScrollAnimation animateIn='fadeInUp'
                  duration={1}
                  delay={0}
                  animateOut='fadeInUp '
                  animateOnce={true}>
                  <div className='text-center text-white'>
                    <h2>Join Thousand of Happy Students!</h2>
                    <p>Subscribe our newsletter & get latest news and updation!</p>
                    {/* <form className='sup-form'>
                      <input type='email' className='form-control' placeholder='Your Email Address' />
                      <input type='submit' className='btn btn-started' value='Get started' />
                    </form> */}
                  </div>
                </ScrollAnimation>
              </Col>
              
            </Row>
          </div>
        </div>
      </div>
    </>

  )
}

export default Homepage

const Item = (props) => {

  const { item } = props
  
  return (

    <Col md={4}>
      <ScrollAnimation animateIn='fadeInUp '
        duration={1}
        delay={0}
        animateOut='fadeInUp '
        animateOnce={true}>
        <div className='education-section' style={{ backgroundColor: '#00adb61a' }}>
          <Link to={`/detail/${item.ID}`}>
            <div className='education-icon'>
              <a href='#' >
                <img src={item.LINK_ANH_BACKGROUND == null ? (imgEdu1) : (item.LINK_ANH_BACKGROUND)} className='img-fluid' />
              </a>
            </div>
          </Link>
          <div className='education-content'>
            <h5 className='title' style={{ color: item.colorTitle }}>  <Link to={`/detail/${item.ID}`}>{item.TIEU_DE_KHOA_HOC}</Link></h5>
            {/* <h6>{item.NOI_DUNG_KHOA_HOC}</h6> */}
            <ul className='list-unstyled m-0'>
              <li>
                <TiCalendar size={20} />  <span className='mb-0'> <span className="text-orange">{item.SL_BAI_HOC} bài học</span></span>
              </li>
            </ul>
          </div>
        </div>
      </ScrollAnimation>
    </Col>
  )
}

const Item1 = (props) => {
  const { item } = props

  return (
    <Col md='4'>
      <ScrollAnimation animateIn='fadeInUp '
        duration={1}
        delay={0}
        animateOut='fadeInUp '
        animateOnce={true}>
        <div className='edu-block'>
          <Link to={`/detail/${item.ID}`}>
            <div className='edu-image'>
              <a href="#">
                <img src={item.LINK_ANH_BACKGROUND == null ? (imgList1) : (item.LINK_ANH_BACKGROUND)} className='img-fluid' />
              </a>
            </div>
          </Link>

          <div className='edu-content'>
            <Link to={`/detail/${item.ID}`}>
              <div className='edu-title'>
                <h6><a href='#'>{item.TIEU_DE_KHOA_HOC}</a><span>({item.SL_BAI_HOC})</span></h6>
                <p className='mb-0'>{item.NOI_DUNG_KHOA_HOC == null ? '' : item.NOI_DUNG_KHOA_HOC}</p>
              </div>
            </Link>

            <div className='edu-info'>
              <ul className='list-unstyled m-0 d-flex align-items-center justify-content-between'>
                <li><FaRegEye /><span>800 views</span></li>
                <li><FaRegClock /><span>6h 30min</span></li>
                <li><FaRegStar color={'orange'} /><span>4.7 Reviews</span></li>
              </ul>
            </div>
            <div className='edu-footer'>
              <div className='edu-author'>
                <div className='edu-author-image'>
                  <a href='#'>
                    <img className='img-fluid' src={user2} />
                  </a>
                </div>
                <h6>Minh Hieu</h6>
              </div>
              <div className='edu-lecture'>
                <h6 className='mb-0'><FaStepForward color={'#1ead6b'} /></h6>
                <span>42 lectures</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </Col>

  )
}