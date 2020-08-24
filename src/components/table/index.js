import React from 'react'
import { Table } from 'semantic-ui-react'

import { TableHeader } from './tableHeader'
import { TableBody } from './tableBody'

const titles = [
  'Issue Number',
  'Title',
  'Created At',
  'Updated At',
  // 'Labels',
  'State'
]

const keysOfData = [
  'number',
  'title',
  'created_at',
  'updated_at',
  // 'labels',
  'state'
]

const mock = {
  number: 19678,
  title: 'Bug: React 16 no longer supports triggering form input change/input events programmatically',
  created_at: '2020-08-23T21:27:55Z',
  updated_at: '2020-08-23T21:38:38Z',
  labels: [
    {
      id: 155984160,
      node_id: 'MDU6TGFiZWwxNTU5ODQxNjA=',
      url: 'https://api.github.com/repos/facebook/react/labels/Status:%20Unconfirmed',
      name: 'Status: Unconfirmed',
      color: 'd4c5f9',
      default: false,
      description: "A potential issue that we haven't yet confirmed as a bug"
    }
  ],
  state: 'open'
}

export const MyTable = () => (
  <Table celled >

    <TableHeader headerTitles={titles}/>
    <TableBody keysOfData={keysOfData} data={[
      {
        content: mock,
        isNegative: !false,
        isPositive: !true
      }
    ]} />
  </Table>
)
