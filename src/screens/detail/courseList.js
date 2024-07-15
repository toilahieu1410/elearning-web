import React from "react"
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import img1 from '../../assets/img/img-1.jpg'

import BreadcrumbComponent from "../../components/layout/breadcrumb"

const data = [
  {
    id: 0,
    datetime: '20/10/2021',
    title: 'Bài học 1',
    image: img1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 1,
    datetime: '15/10/2021',
    title: 'Bài học 2',
    image: img1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    id: 2,
    datetime: '13/11/2021',
    title: 'Bài học 3',
    image: img1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    id: 3,
    datetime: '01/05/2021',
    title: 'Khóa nâng cao 1',
    image: img1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    id: 4,
    datetime: '22/12/2021',
    title: 'Khóa nâng cao 2',
    image: img1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    id: 5,
    datetime: '11/07/2021',
    title: 'Khóa nâng cao 3',
    image: img1,
    content: '2000'
  },
]

const CourseList = () => {

  return (
    <div className='course-list'>
      <div className='breadcrumb-bar'>
        <div className='container-fluid'>
          <Row className="align-items-center">
            <Col md='12'>
              <BreadcrumbComponent title={'Course-List'} />
            </Col>
          </Row>
        </div>
      </div>
      <div className='container'>
        <Row className='mt-4'>
          {
            data.map((item, index) => (
              <ItemCourse key={index} id={item.id} datetime={item.datetime} title={item.title} image={item.image} content={item.content} />
            ))
          }
        </Row>
      </div>
    </div>
  )
}

export default CourseList

const ItemCourse = (props) => {

  const { id, datetime, title, image, content } = props

  return (
    <Col md='4' lg='4'>
      <Link to={`/course-detail/${id}`} params={{ id: id }}>
        <div className='course-item-list'>
          <div className='course-item-image'>
            <img src={image} className='img-fluid w-100' alt="description of..." />
          </div>
          <div className='course-item-content'>
            <span className='datetime'>{datetime}</span>
            <h5 className='course-item-title'>{title}</h5>
            <p >{content}</p>
          </div>
        </div>
      </Link>
    </Col>
  )
}