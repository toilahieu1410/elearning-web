import Homepage from '../components/home/index'
import Detail from '../screens/detail/index'
import CourseList from '../screens/detail/courseList'
import CourseDetail from '../screens/detail/courseDetail'
import Calendar from '../screens/calendar'
import Rank from '../screens/rank'

export const routes = [
  {path:"/homepage", Component: Homepage},
  {path:"/detail/:id", Component: Detail},
  {path:"/course-list/:id", Component: CourseList},
  {path:"/course-detail/:parent_id/:id", Component: CourseDetail},
  {path:"/calendar", Component: Calendar},
  {path:"/rank", Component: Rank}
]