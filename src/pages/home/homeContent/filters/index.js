import React from 'react'
import { Form } from 'semantic-ui-react'

const countryOptions = [
  { key: 'all', value: 'all', text: 'all' },
  { key: 'open', value: 'open', text: 'open' },
  { key: 'closed', value: 'closed', text: 'closed' }
]

const quantityOption = [
  { key: '10', value: '10', text: '10' },
  { key: '25', value: '25', text: '25' },
  { key: '50', value: '50', text: '50' },
  { key: '100', value: '100', text: '100' }
]

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
            options={countryOptions}
          />

          <Form.Dropdown
            selection
            clearable
            id="per_page"
            placeholder='quantity for page'
            options={quantityOption}
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
