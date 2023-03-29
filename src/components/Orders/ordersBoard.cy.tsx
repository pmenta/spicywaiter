/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

import { OrdersBoard } from './OrdersBoard'
import { type IOrder } from '@/types/Order';

describe('<OrderModal />', () => {
  const orders = [{
    id: "63d00c935a84494dcddb1233",
    table: "3",
    status: "WAITING",
    products: [
      {
        product: {
          id: "63cf57ac0cbecadf803f575a",
          name: "Coca-Cola",
          description: "Coca cola trincano de gelada",
          imagePath: "https://spicywaiter.s3.sa-east-1.amazonaws.com/1674532780467-1674532780467-coca-cola.png",
          price: 8,
          ingredients: [],
        },
        quantity: 1,
      },
      {
        product: {
          id: "63cf57ac0cbaas4df803f575a",
          name: "Rosquinha",
          description: "aql do simpson",
          imagePath: "https://spicywaiter.s3.sa-east-1.amazonaws.com/1674532780467-1674532780467-coca-cola.png",
          price: 15,
          ingredients: [],
        },
        quantity: 2,
      },
    ],
  }] as IOrder[];

  const icon = '👨‍🍳'
  const title = 'Em produção'

  it('renders', () => {
    cy.mount(<OrdersBoard icon={icon} orders={orders} title={title} />)
  })

  it('should render correct header infos', () => {
    cy.mount(<OrdersBoard icon={icon} orders={orders} title={title} />)
    cy.get('header').contains(icon)
    cy.get('header').contains(title)
    cy.get('header').contains(`(${orders.length})`)
  })
  
  it('should render correct orders', () => {
    cy.mount(<OrdersBoard icon={icon} orders={orders} title={title} />)
    orders.map((order) => {
      cy.get('button').contains(`Mesa ${order.table}`)
      cy.get('button').contains(`${order.products.length} Ite${order.products.length !== 1 ? "ns" : "m"}`)
    })
  })

  it('should open correct modal', () => {
    cy.mount(<OrdersBoard icon={icon} orders={orders} title={title} />)

    if (orders[0]) {
      cy.get('button').contains(`Mesa ${orders[0].table}`).click()
      cy.get('div[role="dialog"]').contains(`Mesa ${orders[0].table}`)
    }
  })

  it('should be able to close modal', () => {
    cy.mount(<OrdersBoard icon={icon} orders={orders} title={title} />)

    if (orders[0]) {
      cy.get('button').click()

      const modal = cy.get('div[role="dialog"]')
      modal.contains(`Mesa ${orders[0].table}`)
      modal.get('header > button').click()
      
      modal.should('not.exist')
    }
  })
})