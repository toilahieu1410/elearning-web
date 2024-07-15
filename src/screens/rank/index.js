import React from "react"
import { FaCodeBranch, FaExclamationCircle, FaVoicemail } from "react-icons/fa"
import { Row, Col, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import user from '../../assets/img/user.jpg'
import ScrollAnimation from "react-animate-on-scroll"

const data = [
  {
    id: 0,
    rank: '1st',
    image: user,
    name: 'Minh Hieu',
    nickname: 'otis',
    contributions: '785 Contributions',
    time: 120,
    commit: 368,
    pullrequest: 142
  },
  {
    id: 1,
    rank: '2nd',
    image: user,
    name: 'Thang Tbag',
    nickname: 'thangtbag',
    contributions: '686 Contributions',
    time: 96,
    commit: 555,
    pullrequest: 111
  },
  {
    id: 2,
    rank: '3rd',
    image: user,
    name: 'Tien Up',
    nickname: 'tienup',
    contributions: '333 Contributions',
    time: 99,
    commit: 259,
    pullrequest: 211
  },
  {
    id: 3,
    rank: '4th',
    image: user,
    name: 'Minh Duc',
    nickname: 'minhduc',
    contributions: '785 Contributions',
    time: 120,
    commit: 368,
    pullrequest: 142
  },
  {
    id: 4,
    rank: '5th',
    image: user,
    name: 'Hoang Van Manh',
    nickname: 'hoangvanmanh',
    contributions: '785 Contributions',
    time: 120,
    commit: 368,
    pullrequest: 142
  },
  {
    id: 5,
    rank: '6th',
    image: user,
    name: 'Michael Hieu',
    nickname: 'mchealhieu',
    contributions: '785 Contributions',
    time: 120,
    commit: 368,
    pullrequest: 142
  }
]
const Rank = () => {
  return (
    <div className='rank'>
      <div className='container'>
        <div className='rank-title text-center position-relative'>
          <h4>Những người tham gia khóa học nhiệt tình nhất</h4>
          <p><span>30/10/2021</span> - <span>09/12/2021</span></p>
          <ul className='list-unstyled d-flex align-items-center position-absolute right-0 mb-0'>
            <li className='list-week active'>  <Link to={'#'}>This week</Link></li>
            <li className='list-week'><Link to={'#'}>Last week</Link></li>
          </ul>
        </div>
        <div className='rank-top'>
          <Row className=''>
            {
              data.map((item, index) => (
                index < 3 &&
                <ListRank key={index} item={item} />
              ))
            }
          </Row>
        </div>
        <div className='rank-list mt-5'>
          <ScrollAnimation animateIn='fadeInUp '
            duration={1}
            delay={0}
            animateOut='fadeInUp '
            animateOnce={true}>
            <Table hover className='table-borderless mb-0'>
              <thead>
                <tr>
                  <th className='text-center' style={{ width: 80 }}>Rank</th>
                  <th className='text-left' style={{ minWidth: 120 }}>Name</th>
                  <th className='text-center' style={{ minWidth: 120 }}>Contribute</th>
                  <th className='text-center' style={{ minWidth: 80 }}>Time</th>
                  <th className='text-center' style={{ minWidth: 80 }}>Commits</th>
                  <th className='text-center' style={{ minWidth: 80 }}>Pull Request</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => (
                    index >= 3 &&
                    <ListRankTable key={index} item={item} />
                  ))
                }
              </tbody>
            </Table>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
export default Rank

const ListRank = (props) => {
  const { item } = props
  return (

    <Col md={4}>
      <ScrollAnimation animateIn='flipInY'
        duration={0.8}
        delay={0}
        animateOut='flipInY'
        animateOnce={true}
      >
        <div className={`rank-top-best top-${item.id}`}>
          <div className='p-5'>
            <div className='image-author position-relative'>
              <img src={item.image} className='img-fluid rounded-circle' />
              <span className='text-rank'>{item.rank}</span>
            </div>
            <div className='rank-info'>
              <h6 className='mt-4'>{item.name}</h6>
              <p className='rank-nickname-text'>{item.nickname}</p>
              <p className='mt-4 contribute'>{item.contributions}</p>
            </div>
          </div>

          <div className='rank-result d-flex align-items-center'>
            <div className='flex-1'>
              <FaExclamationCircle color={'#ccc'} /> <span>{item.time}</span>
            </div>
            <div className='flex-1'>
              <FaVoicemail color={'#ccc'} /> <span>{item.commit}</span>
            </div>
            <div className='flex-1'>
              <FaCodeBranch color={'#ccc'} /> <span>{item.pullrequest}</span>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </Col>
  )
}

const ListRankTable = (props) => {
  const { item } = props
  return (

    <tr className='tr-data'>
      <td className='text-center align-middle'>{item.rank}</td>
      <td className='text-center align-middle'>
        <div className='info-author'>
          <div className='info-author-avatar'>
            <img src={item.image} className='img-fluid rounded-circle' />
          </div>
          <div className='info-author-name'>
            <h6 className='mb-0'>{item.name}</h6>
            <p className='mb-0'>{item.nickname}</p>
          </div>
        </div>
      </td>
      <td className='text-center align-middle'>
        <p className='contribute-table mb-0'>{item.contributions}</p>
      </td>
      <td className='text-center align-middle'>
        <FaExclamationCircle color={'#ccc'} /> <span className='fw-bolder'>{item.time}</span>
      </td>
      <td className='text-center align-middle'>
        <FaVoicemail color={'#ccc'} /> <span className='fw-bolder'>{item.commit}</span>
      </td>
      <td className='text-center align-middle'>
        <FaCodeBranch color={'#ccc'} /> <span className='fw-bolder'>{item.pullrequest}</span>
      </td>
    </tr>

  )
}