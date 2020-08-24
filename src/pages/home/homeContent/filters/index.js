import React from 'react'
import { Form } from 'semantic-ui-react'

import { stateOptions, quantityOptions } from './selectionOptions'

import { useFilters } from './useFilters'

export const Filters = () => {
  const {
    isLoading,
    filterData,
    handleOnChange,
    handleOnSubmit
  } = useFilters()

  return (
    <section>
      <h2>Filters</h2>
      <div style={{ margin: '0 0 2rem' }}>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group widths='equal'>

            <Form.Field>
              <input
                type="date"
                name="since"
                id="since"
                value={filterData.since}
                onChange={handleOnChange}
                disabled={isLoading}
              />
            </Form.Field>

            <Form.Dropdown
              selection
              clearable
              id="state"
              placeholder='filter from state'
              options={stateOptions}
              value={filterData.state}
              onChange={handleOnChange}
              disabled={isLoading}
            />

            <Form.Dropdown
              selection
              clearable
              id="per_page"
              placeholder='quantity for page'
              options={quantityOptions}
              value={filterData.per_page}
              onChange={handleOnChange}
              disabled={isLoading}
            />

          </Form.Group>

          <Form.Button
            circular
            fluid
            color="instagram"
            loading={isLoading}
            size="big"
            disabled={false}
          >
            Filter
          </Form.Button>
        </Form>

      </div>

    </section>
  )
}
