/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'

import { OrderModal } from './index'
import { type IOrder } from '@/types/Order';
import { getOrderStatusText } from '@/utils/orderStatus';
import { formatCurrency } from '@/utils/formatCurrency';

describe('<OrderModal />', () => {
  const order = {
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
    createdAt: "2023-01-24T16:51:31.232Z",
  } as IOrder;

  it('renders', () => {
    cy.mount(<OrderModal onClose={() => {}} order={order} />)
  })

  it('should render correct table', () => {
    cy.mount(<OrderModal onClose={() => {}} order={order} />)
    cy.get('h1').should('contain', `Mesa ${order.table}`)
  })

  it('should render correct status', () => {
    const waitingOrder = {...order, status: "WAITING"}
    const preparingOrder = {...order, status: "IN_PRODUCTION"}
    const readyOrder = {...order, status: "DONE"}  
    const cancelledOrder = {...order, status: "CANCELLED"}  

    const orders = [waitingOrder, preparingOrder, readyOrder, cancelledOrder]
    let actualOrder = 0

    cy.mount(<OrderModal onClose={() => {}} order={orders[actualOrder] as IOrder} />)
    cy.contains(getOrderStatusText("WAITING", true))

    actualOrder ++

    cy.mount(<OrderModal onClose={() => {}} order={orders[actualOrder] as IOrder} />)
    cy.contains(getOrderStatusText("IN_PRODUCTION", true))

    actualOrder ++

    cy.mount(<OrderModal onClose={() => {}} order={orders[actualOrder] as IOrder} />)
    cy.contains(getOrderStatusText("DONE", true))


    actualOrder ++

    cy.mount(<OrderModal onClose={() => {}} order={orders[actualOrder] as IOrder} />)
    cy.contains(getOrderStatusText("CANCELLED", true))
  })

  it('should render correct total', () => {
    const total = order.products.reduce((total, { product, quantity }) => {
      return total + (product.price * quantity);
    }, 0);

    cy.mount(<OrderModal onClose={() => {}} order={order} />)
    cy.get('#totalPrice').should('contain.text', formatCurrency(total))
  })

  it('should render correct product info', () => {
    cy.mount(<OrderModal onClose={() => {}} order={order} />)

    order.products.map((product) => {
      cy.get(`#${product.product.id}`).should('contain.text', product.product.name)
      cy.get(`#${product.product.id}`).should('contain.text', `${product.quantity}x`)
      cy.get(`#${product.product.id}`).should('contain.text', formatCurrency(product.product.price))
      cy.get(`#${product.product.id} img`).should('have.attr', 'alt', product.product.name)
    })
  })
})