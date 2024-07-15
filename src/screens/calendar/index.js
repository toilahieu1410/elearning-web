import React, { Fragment } from "react"
import Breadcrumb from "../../components/layout/breadcrumb"
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import { Container, Row, Col, Card, CardHeader, CardBody } from 'reactstrap'

const localizer = momentLocalizer(moment)
let allViews = Object.keys(Views).map(k => Views[k])

const now = new Date()
const data = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2021, 3, 0),
    end: new Date(2021, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2021, 3, 7),
    end: new Date(2021, 3, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2021, 3, 9, 0, 0, 0),
    end: new Date(2021, 3, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2021, 3, 11),
    end: new Date(2021, 3, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2021, 3, 12, 10, 30, 0, 0),
    end: new Date(2021, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2021, 3, 12, 12, 0, 0, 0),
    end: new Date(2021, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2021, 3, 12, 14, 0, 0, 0),
    end: new Date(2021, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2021, 3, 12, 17, 0, 0, 0),
    end: new Date(2021, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2021, 3, 12, 20, 0, 0, 0),
    end: new Date(2021, 3, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2021, 3, 13, 7, 0, 0),
    end: new Date(2021, 3, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2021, 3, 17, 19, 30, 0),
    end: new Date(2021, 3, 18, 2, 0, 0),
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2021, 3, 17, 19, 30, 0),
    end: new Date(2021, 3, 17, 23, 30, 0),
  },
  {
    id: 13,
    title: 'Multi-day Event',
    start: new Date(2021, 3, 17, 19, 30, 0),
    end: new Date(2021, 3, 17, 23, 30, 0),
  },
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: 'Point in Time Event',
    start: now,
    end: now,
  },
  {
    id: 16,
    title: 'Video Record',
    start: new Date(2021, 3, 14, 15, 30, 0),
    end: new Date(2021, 3, 14, 19, 0, 0),
  },
  {
    id: 17,
    title: 'Dutch Song Producing',
    start: new Date(2021, 3, 14, 16, 30, 0),
    end: new Date(2021, 3, 14, 20, 0, 0),
  },
  {
    id: 18,
    title: 'Itaewon Halloween Meeting',
    start: new Date(2021, 3, 14, 16, 30, 0),
    end: new Date(2021, 3, 14, 17, 30, 0),
  },
  {
    id: 19,
    title: 'Online Coding Test',
    start: new Date(2021, 3, 14, 17, 30, 0),
    end: new Date(2021, 3, 14, 20, 30, 0),
  },
  {
    id: 20,
    title: 'An overlapped Event',
    start: new Date(2021, 3, 14, 17, 0, 0),
    end: new Date(2021, 3, 14, 18, 30, 0),
  },
  {
    id: 21,
    title: 'Phone Interview',
    start: new Date(2021, 3, 14, 17, 0, 0),
    end: new Date(2021, 3, 14, 18, 30, 0),
  },
  {
    id: 22,
    title: 'Cooking Class',
    start: new Date(2021, 3, 14, 17, 30, 0),
    end: new Date(2021, 3, 14, 19, 0, 0),
  },
  {
    id: 23,
    title: 'Go to the gym',
    start: new Date(2021, 3, 14, 18, 30, 0),
    end: new Date(2021, 3, 14, 20, 0, 0),
  },
]

const CalendarScreen = () => {
  return (
    <Fragment>
      <div className='breadcrumb-bar'>
        <div className='container-fluid'>
          <div className='calendar-title'>
            <h1 className='text-center mb-1 position-relative fw-bolder'>Lịch học </h1>
          </div>
          <Row className="align-items-center">
            <Col md='12'>
              <Breadcrumb title={'Course-Detail'} />
            </Col>
          </Row>
        </div>
      </div>
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader style={{backgroundColor:'#3590DE'}}>
                <h5 className='text-white'>Lịch học</h5>
              </CardHeader>
              <CardBody>
                <Calendar
                  localizer={localizer}
                  scrollToTime={new Date(2020, 1, 1, 6)}
                  defaultDate={new Date(2021, 4, 12)}
                  onSelectEvent={event => alert(event.title)}
                  views={allViews}
                  events={data}
                  eventOverlap
                  dragRevertDuration={500}
                  dragScroll
                  droppable={true}
                  showMultiDayTimes
                  step={60}
                  startAccessor="start"
                  endAccessor="end"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default CalendarScreen