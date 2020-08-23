import React from 'react'
import { Table } from 'semantic-ui-react'

import { TableHeader } from './tableHeader'
import { TableBody } from './tableBody'

export function MyTable() {
  return (
    <Table celled>

      <TableHeader />
      <TableBody />

    </Table>
  )
}
