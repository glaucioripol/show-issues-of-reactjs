import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

export const TableHeader = memo(TableHeaderComponent)

function TableHeaderComponent({ headerTitles }) {
  const titles = headerTitles.map(makeHeaderCell)

  function makeHeaderCell(content) {
    return <Table.HeaderCell key={content}>{content}</Table.HeaderCell>
  }

  return (
    <Table.Header>
      <Table.Row>
        {titles}
      </Table.Row>
    </Table.Header>
  )
}

TableHeaderComponent.propTypes = {
  headerTitles: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
}

TableHeaderComponent.defaultProps = {
  headerTitles: ['example']
}
