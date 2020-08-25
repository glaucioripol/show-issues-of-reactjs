import React from 'react'

import { Button, Icon } from 'semantic-ui-react'

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

      <div className="container__table__pagination">
        <Button icon labelPosition='left' color="instagram" disabled>
          <Icon name='left arrow' />
        previous
        </Button>

        <Button icon labelPosition='right' color="instagram">
        Next
          <Icon name='right arrow' />
        </Button>
      </div>

      {issuesState.isLoading && <Loader />}
    </main>
  )
}
