import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Card, CardBody, Input, Button, CardHeader, CardTitle, Label } from 'reactstrap'
import { FaTag, FaUserAlt,FaRegClone, FaGamepad, FaClock, FaFlag, FaSun } from 'react-icons/fa'
import user from '../../assets/img/user.jpg'
import img1 from '../../assets/img/img-1.jpg'
import BreadcrumbComponent from "../../components/layout/breadcrumb"
import {loadDanhSachBaiHoc, loadChiTietKhoaHoc} from '../../redux/khoaHoc/action'
import { _loadDanhSachBaiHoc, _loadChiTietKhoaHoc } from '../../api/khoaHoc'
import moment from "moment"
import TieuDeBaiHoc from '../../components/detail/tieuDeBaiHoc'
import ItemVideo from '../../components/detail/itemVideo'
import Comment from '../../components/detail/comment'
import TacGia from '../../components/detail/tacGia'

const CourseDetail = () => {

  const dispatch = useDispatch()

  const { parent_id, id } = useParams()

  const listDanhSachBaiHoc = useSelector((store) => store.khoaHoc.listDanhSachBaiHoc)
  const listChiTietKhoaHoc = useSelector((store) => store.khoaHoc.listChiTietKhoaHoc)
  // console.log(listDanhSachBaiHoc)
  const [data, setData] = useState({})

  useEffect(() => {
    dispatch(loadDanhSachBaiHoc(id))
  }, [id])

  useEffect(() => {
    dispatch(loadChiTietKhoaHoc(id))
  }, [id])


  const handleDetail = (id) => {
    _loadChiTietKhoaHoc(id).then((res) => {
      setData(res)
    })
  }
console.log(listDanhSachBaiHoc)
  return (
    <div className='course-detail'>
      <div className='breadcrumb-bar'>
        <div className='container-fluid'>
          <div className='all-course-title'>
            <h1 className='text-center mb-1 position-relative fw-bolder'>Chi tiết khóa học</h1>
          </div>
          <Row className="align-items-center">
            <Col md='12'>
              <BreadcrumbComponent title={'Course-Detail'} />
            </Col>
          </Row>
        </div>
      </div>
      <TieuDeBaiHoc listChiTietKhoaHoc={listChiTietKhoaHoc} />
      <div className='section-body'>
        <div className='container'>
          <Row >
            <Col lg={8} md={8}>
              <div className='content-view'>
                <div className='content-wrapper'>
                  <h5 className='content-wrapper-title mb-3'>
                    {listChiTietKhoaHoc.TIEU_DE_KHOA_HOC}
                  </h5>
                  <p>{listChiTietKhoaHoc.NOI_DUNG_KHOA_HOC}</p>
                </div>
                <div className='content-blog'>
                  <ItemVideo data={data} />
                </div>

                <TacGia nguoiThuyetTrinh={data.NGUOI_THUYET_TRINH}/>
                
                <Comment/>


              </div>
            </Col>
            <Col lg={4} md={4}>
        
              <Card className='post-widget mb-4'>
                <CardHeader>
                  <CardTitle><h6>Tên khóa học:</h6> </CardTitle>
                </CardHeader>
                <CardBody>
                  <ul className='latest-post'>
                    {
                      listDanhSachBaiHoc.map((item, index) => (
                        <ItemListVideo key={index} item={item} handleDetail={handleDetail} />
                      ))
                    }
                  </ul>
                </CardBody>
              </Card>

              <ListBaiHoc parent_id={parent_id} />

              <Card className='mt-4'>
                <CardHeader style={{ backgroundColor: '#fff', border: 'transparent' }}>
                  <div className='user-info'>
                    <div className='user-thumb'>
                      <img src={user} className='img-fluid' />
                    </div>
                    <div className='user-content'>
                      <h6 className='mb-0'>Minh Hieu</h6>
                      <span>Web developer</span>
                    </div>
                  </div>

                </CardHeader>
                <CardBody style={{borderTop: '1px solid  #e6ebf5' }}>
                  <div className='content-info'>
                    <h5 className="content-info-title mb-3">Course Features</h5>
                    <ul className="content-info-list right list-unstyled mb-0">
                      <li><FaUserAlt size={20}/>Student Enrolled:<strong>1740</strong></li>
                      <li><FaRegClone size={20}/>lectures:<strong>10</strong></li>
                      <li><FaGamepad size={20}/>Quizzes:<strong>4</strong></li>
                      <li><FaClock size={20}/>Duration:<strong>60 hours</strong></li>
                      <li><FaTag size={20}/>Skill Level:<strong>Beginner</strong></li>
                      <li><FaFlag size={20}/>Language:<strong>English</strong></li>
                      <li><FaSun size={20}/>Assessment:<strong>Yes</strong></li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
       
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail

const ItemListVideo = (props) => {

  const { item, handleDetail } = props

  return (
    <li>
      <div className='d-flex'>
      <div className='post-image'>
        <Button onClick={() => handleDetail(item.ID)} className='btn btn-default p-0'>
          {
            item.LINK_ANH_BACKGROUND ? (
              <img src={item.LINK_ANH_BACKGROUND.includes('https://') ? (item.LINK_ANH_BACKGROUND): ('https://'+ item.LINK_ANH_BACKGROUND)} className='img-fluid' alt="" />
            ) : (
              <img src={img1} className='img-fluid' alt="" />
            )
          }
        </Button>
      </div>
      <div className='post-info'>
        <h6>
          <Button onClick={() => handleDetail(item.ID)} className='btn btn-default p-0 fw-bold'>{item.TIEU_DE_KHOA_HOC}</Button>
        </h6>
        {
          item.NGAY_UPDATE ? (
            <p>{moment(item.NGAY_UPDATE).format('DD/MM/YYYY')}</p>
          ) : (
            <p>{moment(item.NGAY_TAO).format('DD/MM/YYYY')}</p>
          )
        }
      </div>
      </div>
 
    </li>
  )
}

const ListBaiHoc = (props) => {

  const { parent_id } = props

  const [data, setData] = useState([])

  useEffect(() => {
    _loadDanhSachBaiHoc(parent_id).then(res => {
      setData(res)
    })
  }, [parent_id])

  return (
    <Card className='post-widget'>
      <CardHeader>
      <CardTitle><h6>Danh mục khóa học:</h6> </CardTitle>
      </CardHeader>
      <CardBody>
        <ul className='latest-post'>
          {
            data.map((item, index) => (
              <li key={index}>
                <div className='post-image'>
                  <Link to={`/detail/${parent_id}`}>
                    {
                      item.LINK_ANH_BACKGROUND ? (
                        <img src={item.LINK_ANH_BACKGROUND} className='img-fluid' alt="description of..." />
                      ) : (
                        <img src={img1} className='img-fluid' alt="" />
                      )
                    }
                  </Link>
                </div>
                <div className='post-info'>
                  <h6>
                    <Link to={`/detail/${parent_id}`}>{item.TIEU_DE_KHOA_HOC}</Link>
                  </h6>
                  {
                    item.NGAY_UPDATE ? (
                      <p>{moment(item.NGAY_UPDATE).format('DD/MM/YYYY')}</p>
                    ) : (
                      <p>{moment(item.NGAY_TAO).format('DD/MM/YYYY')}</p>
                    )
                  }
                </div>
              </li>
            ))
          }
        </ul>
      </CardBody>
    </Card>
  )
}
