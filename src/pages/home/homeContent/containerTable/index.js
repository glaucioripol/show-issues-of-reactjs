import React from 'react'

import { MyTable } from '../../../../components'

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

const data = [
  {
    content: {
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
    },
    isNegative: false,
    isPositive: true
  }
]

export function ContainerTable() {
  return (
    <main className='container__table'>
      <MyTable
        titles={titles}
        keysOfData={keysOfData}
        data={data}
      />
    </main>
  )
}
