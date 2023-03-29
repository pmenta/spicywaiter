import React from 'react'

import { Header } from './index'
import HomeIcon from "@/assets/images/home.svg"

describe('<Header />', () => {
  const title = 'Home'
  const subtitle = 'Visualize os pedidos dos seus clientes'

  it('renders', () => {
    cy.mount(<Header title={title} subtitle={subtitle} icon={HomeIcon as string}/>)
  })

  it('should render correct title', () => {
    cy.mount(<Header title={title} subtitle={subtitle} icon={HomeIcon as string}/>)
    cy.get('h1').should('contain', title)
  })

  it('should render correct subtitle', () => {
    cy.mount(<Header title={title} subtitle={subtitle} icon={HomeIcon as string}/>)
    cy.get('h2').should('contain', subtitle)
  })
})