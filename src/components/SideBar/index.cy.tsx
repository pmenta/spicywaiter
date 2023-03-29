import React from 'react'

import { SideBar } from './index'

describe('<Sidebar />', () => {
  it('renders', () => {
    cy.mount(<SideBar />)
  })

  it('should render correct title', () => {
    cy.mount(<SideBar />)
    cy.get('h1').should('contain', '🌶W')
  })
})