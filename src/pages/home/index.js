import React from 'react'

import { Header } from '../../components'
import { HomeContent } from './homeContent'

// new URLSearchParams(params).toString() - querystring

export function Home() {
  return (
    <>
      <Header/>
      <HomeContent/>
    </>
  )
}
