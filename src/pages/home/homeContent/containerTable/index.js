import React from 'react'

import { tableConfig } from './tableConfig'

import { useDataContainerTable } from './useDataContainerTable'

import { MyTable, Loader } from '../../../../components'

export function ContainerTable() {
  const { issuesState } = useDataContainerTable()
  return (
    <main className='container__table'>
      <MyTable
        titles={tableConfig.titles}
        keysOfData={tableConfig.keysOfData}
        data={issuesState.issues}
        loading={issuesState.isLoading}
      />
      { issuesState.isLoading && <Loader /> }
    </main>
  )
}
