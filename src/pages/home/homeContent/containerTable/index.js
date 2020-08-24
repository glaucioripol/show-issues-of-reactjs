import React from 'react'

import { MyTable } from '../../../../components'

import { tableConfig } from './tableConfig'

import { useDataContainerTable } from './useDataContainerTable'

export function ContainerTable() {
  const { issuesState } = useDataContainerTable()
  return (
    <main className='container__table'>
      <MyTable
        titles={tableConfig.titles}
        keysOfData={tableConfig.keysOfData}
        data={issuesState.issues}
      />
    </main>
  )
}
