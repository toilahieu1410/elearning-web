import {FaHome, FaList, FaMobileAlt, FaLinux} from 'react-icons/fa'

export const SidebarData = [
  {
    title: 'Trang Chủ',
    path:'/',
    icon: <FaHome size={20}/>,
  },
  {
    title: 'Khóa Học',
    path:'/list',
    icon: <FaList size={20}/>,
  },
  {
    title: 'Lịch học',
    path:'/calendar',
    icon: <FaList size={20}/>,
  },
  {
    title: 'Tải App E-Learning',
    path:'/app',
    icon: <FaMobileAlt size={20}/>,
  },
  {
    title: 'Live Class',
    path:'/live-class',
    icon: <FaLinux size={20}/>,
  },
  {
    title: 'Bảng xếp hạng',
    path:'/rank',
    icon: <FaLinux size={20}/>,
  }
]