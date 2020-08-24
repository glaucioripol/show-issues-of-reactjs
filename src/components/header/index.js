import React from 'react'
import './header.css'

import { icReact } from '../../assets/img'

export const Header = () => (
  <header className="header">
    <figure>
      <img
        className="header__icon"
        src={icReact}
        alt="icon of react"
        loading="lazy"
      />
    </figure>

    <h1 className="header__title">
      <span className="header__title--reactColor">
        React
      </span> Issues
    </h1>
  </header>
)
