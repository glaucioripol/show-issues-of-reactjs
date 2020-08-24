import React from 'react'

import { Container } from 'semantic-ui-react'
import { Filters } from './filters'
import { ContainerTable } from './containerTable'

import './home.css'

export function HomeContent() {
  return (
    <Container fluid>

      <Filters/>

      <ContainerTable/>

    </Container>
  )
}
