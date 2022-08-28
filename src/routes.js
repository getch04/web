import React from 'react'


//users
const Admins = React.lazy(() => import('./views/users/admins/Admins'))
const Operations = React.lazy(() => import('./views/users/operations/Operations'))
const Finance = React.lazy(() => import('./views/users/finance/Finance'))
const Hrs = React.lazy(() => import('./views/users/hrs/Hrs'))
const Doctors = React.lazy(() => import('./views/users/doctors/Doctors'))
const Patients = React.lazy(() => import('./views/users/patients/Patients'))
const Deliverers = React.lazy(() => import('./views/users/deliverers/Deliverers'))



//lab
const Providers = React.lazy(() => import('./views/lab/providers/Providers'))
const Tests = React.lazy(() => import('./views/lab/tests/Tests'))



//other
const Transactions = React.lazy(() => import('./views/transactions/Transactions'))
const Orders = React.lazy(() => import('./views/orders/Orders'))
const Pharmacy = React.lazy(() => import('./views/Pharmacy/Pharmacy'))




const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))


// Notifications
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  
  
  
  //users
  { path: '/users', name: 'Users', element: Admins, exact: true },
  { path: '/users/admins', name: 'Admins', element: Admins, exact: true },
  { path: '/users/hrs', name: 'HRs', element: Hrs, exact: true },
  { path: '/users/operations', name: 'Operations', element: Operations, exact: true },
  { path: '/users/finance', name: 'Finances', element: Finance, exact: true },
  { path: '/users/doctors', name: 'Doctors', element: Doctors, exact: true },
  { path: '/users/patients', name: 'Patients', element: Patients, exact: true },
  { path: '/users/deliverers', name: 'Deliverers', element: Deliverers, exact: true },
  
  //laboratory
  { path: '/laboratory', name: 'Laboratory', element: Providers, exact: true },
  { path: '/laboratory/providers', name: 'Providers', element: Providers, exact: true },
  { path: '/laboratory/tests', name: 'Tests', element: Tests, exact: true },

  
  { path: '/transaction', name: 'Transactions', element: Transactions, exact: true },
  { path: '/orders', name: 'Orders', element: Orders, exact: true },
  { path: '/pharmacy', name: 'Pharmacy', element: Pharmacy, exact: true },

  
  { path: '/notifications', name: 'Notifications', element: Modals, exact: true },
  { path: '/notifications/modals', name: 'Modals', element: Modals },

  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
