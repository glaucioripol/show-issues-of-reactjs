import React from 'react'

import { Container } from 'semantic-ui-react'
import { MyTable } from '../../../components'
import { Filters } from './filters'

import './home.css'

export function HomeContent() {
  return (
    <Container fluid>

      <Filters/>

      <main className='container__table'>
        <MyTable />
      </main>

    </Container>
  )
}
