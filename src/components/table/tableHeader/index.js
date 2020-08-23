import React from 'react'
import { Table } from 'semantic-ui-react'

export function TableHeader() {
  return <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Status</Table.HeaderCell>
      <Table.HeaderCell>Notes</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
}
