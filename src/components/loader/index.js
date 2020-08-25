import React from 'react'
import { Loader as Loading, Dimmer } from 'semantic-ui-react'

export const Loader = () => (
  <Dimmer active>
    <Loading active size='large'>Loading</Loading>
  </Dimmer>
)
