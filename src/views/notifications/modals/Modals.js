import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsCallout } from 'src/components'



const Modals = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <DocsCallout
          content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem'
          name="Modal" href="components/modal" />
      </CCol>

      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Modal</strong> <small>Live demo</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Toggle a working modal demo by clicking the button below. It will slide down and fade
              in from the top of the page.
            </p>
            {/* <DocsExample href="components/modal">{LiveDemo()}</DocsExample> */}
          </CCardBody>
        </CCard>
      </CCol>

    </CRow>
  )
}

export default Modals
