import React from 'react'
import PropTypes from 'prop-types'

import { Table } from 'semantic-ui-react'
import { TableHeader } from './tableHeader'
import { TableBody } from './tableBody'

export const MyTable = ({ titles, keysOfData, data }) => (
  <Table celled >

    <TableHeader headerTitles={titles} />
    <TableBody keysOfData={keysOfData} data={data} />
  </Table>
)

MyTable.propTypes = {
  titles: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  keysOfData: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      isNegative: PropTypes.bool.isRequired,
      isPositive: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
}
