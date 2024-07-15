import React from "react"
import { Link } from 'react-router-dom'
import user from '../../assets/img/user.jpg'
import { Card, CardBody, CardHeader, CardTitle,  } from 'reactstrap'
import { FaRegCalendar, FaReply, FaRegThumbsUp, FaRegThumbsDown, FaRegStar } from 'react-icons/fa'

const rating = [
  {
    star: '5 Star',
    percen: '85%',
  },
  {
    star: '4 Star',
    percen: '75%',
  },
  {
    star: '3 Star',
    percen: '15%',
  },
  {
    star: '1 Star',
    percen: '0%',
  }
]

const Comment = () => {
  return (
    <div>
    <div className='rating-overview'>
      <div className='rating-overview-box'>
        <span className="rating-overview-box-total">4.2</span>
        <span className="rating-overview-box-percent">out of 5.0</span>
        <div className="star-rating" data-rating="5">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
      </div>
      <div className='rating-bars'>
        {
          rating.map((item, index) => (
            <div key={index} className='rating-bars-item'>
              <span className="rating-bars-name">{item.star}</span>
              <div className="rating-bars-inner">
                <span className="rating-bars-rating high" data-rating="4.7">
                  <span className="rating-bars-rating-inner" style={{ width: item.percen }}></span>
                </span>
                <strong>{item.percen}</strong>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    <Card className='list-comment'>
        <CardHeader>
          <CardTitle><h5>Comments - <span>3</span></h5></CardTitle>
        </CardHeader>
        <CardBody>
          <ul className='comments-list'>
            <li>
              <div className='comment'>
                <div className='comment-author'>
                  <img src={user} className='img-fluid rounded-circle' alt="description of..." />
                </div>
                <div className='comment-content'>
                  <div className='d-flex align-items-center justify-content-between'>
                    <h5 className='comment-by'>Minh Hieu</h5>
                    <p className='blog-date'><FaRegCalendar /> Dec 6 2021</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className='d-flex align-items-center justify-content-between mt-2'>
                    <ul className="social_network list-unstyled">
                      <li className='d-inline-block p-0'><Link to={'#'}><FaRegThumbsUp size={14} color={'#0eb987'} /><span>12</span></Link></li>
                      <li className='d-inline-block p-0'><Link to={'#'}><FaRegThumbsDown size={14} color={'#244763'} /><span>2</span></Link></li>

                    </ul>
                    <Link to={'#'} className='comment-button'>
                      <FaReply />&nbsp;<span>Reply</span>
                    </Link>
                  </div>
                </div>
              </div>
              <ul className='comments-list reply'>
                <li>
                  <div className='comment'>
                    <div className='comment-author'>
                      <img src={user} className='img-fluid rounded-circle' alt="description of..." />
                    </div>
                    <div className='comment-content'>
                      <div className='d-flex align-items-center justify-content-between'>
                        <h5 className='comment-by'>Minh Hieu</h5>
                        <p className='blog-date'><FaRegCalendar /> Dec 6 2021</p>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <div className='d-flex align-items-center justify-content-between mt-2'>
                        <ul className="social_network list-unstyled">
                          <li className='d-inline-block p-0'><Link to={'#'}><FaRegThumbsUp size={14} color={'#0eb987'} /><span>12</span></Link></li>
                          <li className='d-inline-block p-0'><Link to={'#'}><FaRegThumbsDown size={14} color={'#244763'} /><span>2</span></Link></li>
                        </ul>
                        <Link to={'#'} className='comment-button'>
                          <FaReply />&nbsp;<span>Reply</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  )
}

export default Comment