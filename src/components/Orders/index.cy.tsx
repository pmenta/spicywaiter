/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

import { Orders } from './index'

describe('<Orders />', () => {
  it('renders', () => {
    cy.mount(<Orders />)
  })

  it('should render all ordersBoards', () => {
    cy.mount(<Orders />)
    cy.get('header').contains('🕒')
    cy.get('header').contains('Fila de espera')
    cy.get('header').contains('(0)')
    cy.get('header').contains('👨‍🍳')
    cy.get('header').contains('Em produção')
    cy.get('header').contains('(0)')
    cy.get('header').contains('✅')
    cy.get('header').contains('Pronto')
    cy.get('header').contains('(0)')
  })
})