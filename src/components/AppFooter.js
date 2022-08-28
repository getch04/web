/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">&copy; 2022 Oli projects.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
