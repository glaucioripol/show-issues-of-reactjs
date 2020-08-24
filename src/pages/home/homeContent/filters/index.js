import React from 'react'
import { Form } from 'semantic-ui-react'

import { stateOptions, quantityOptions } from './selectionOptions'

export const Filters = () => (
  <section>
    <h2>Filters</h2>

    <div style={{ margin: '0 0 2rem' }}>
      <Form onSubmit={() => { }}>
        <Form.Group widths='equal'>

          <Form.Field>
            <input
              type="date"
              name="since"
              id="since"
            />
          </Form.Field>

          <Form.Dropdown
            selection
            clearable
            id="state"
            placeholder='filter from state'
            options={stateOptions}
          />

          <Form.Dropdown
            selection
            clearable
            id="per_page"
            placeholder='quantity for page'
            options={quantityOptions}
          />

        </Form.Group>

        <Form.Button
          circular
          fluid
          color="instagram"
          loading
          size="big"
          disabled={false}
        >
          Filter
        </Form.Button>
      </Form>

    </div>

  </section>)
