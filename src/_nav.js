import React from 'react'
import CIcon from '@coreui/icons-react'
import {

  cilPuzzle,
  cilSpeedometer,

} from '@coreui/icons'
import { CNavGroup, CNavItem, } from '@coreui/react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,

  },
  {
    component: CNavGroup,
    name: 'Users',
    to: '/users',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Admins',
        to: '/users/admins',
      },
      {
        component: CNavItem,
        name: 'HRs',
        to: '/users/hrs',
      },
      {
        component: CNavItem,
        name: 'Operations',
        to: '/users/operations',
      },
      {
        component: CNavItem,
        name: 'Finance',
        to: '/users/finance',
      },
      {
        component: CNavItem,
        name: 'Doctors',
        to: '/users/doctors',
      },
      {
        component: CNavItem,
        name: 'Patients',
        to: '/users/patients',
      },
      {
        component: CNavItem,
        name: 'Deliverers',
        to: '/users/deliverers',
      },

    ],
  },
  {
    component: CNavItem,
    name: 'Transactions',
    to: '/transaction',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Laboratory',
    to: '/laboratory',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Providers',
        to: '/laboratory/providers',
      },
      {
        component: CNavItem,
        name: 'Tests',
        to: '/laboratory/tests',
      },
    ],
  },

  {
    component: CNavItem,
    name: 'Pharmacy',
    to: '/pharmacy',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Orders',
    to: '/orders',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Notifications',
    to: '/notifications',
    icon: <NotificationsNoneIcon sx={{mr:1}}/>,
    badge: {
      color: 'info',
      text: '1',
    },
  },


]

export default _nav
