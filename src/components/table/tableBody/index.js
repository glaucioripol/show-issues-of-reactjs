import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

export function TableBody({ keysOfData, data }) {
  const makeRowsCB = useCallback(makeRows, [keysOfData])(keysOfData, data)
  function makeRows(keys, dataContent) {
    return dataContent.map(({
      content,
      isNegative,
      isPositive
    }) => {
      return (
        <Table.Row key={`${content}-${isNegative}-${isPositive}`}>
          {
            keys.map((key, index) => {
              return (
                <Table.Cell key={index} negative={isNegative} positive={isPositive}>
                  {JSON.stringify(content[key], null, 2)}
                </Table.Cell>
              )
            })
          }
        </Table.Row>
      )
    })
  }

  return (
    <Table.Body>
      {makeRowsCB}
    </Table.Body>
  )
}

TableBody.propTypes = {
  keysOfData: PropTypes
    .arrayOf(PropTypes.string.isRequired)
    .isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      isNegative: PropTypes.bool.isRequired,
      isPositive: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired
}
