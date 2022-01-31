import React from 'react'
import { render } from '@testing-library/react'
import Card, { CardI } from '.'

describe('Card component', () => {
  const cardValues: CardI = {
    description: 'description card', 
    title: 'Title card', 
    starts: 4,
    imageUrl: 'imageUrl',
    superHost: true
  }

  test('Should render component', () => {
    const component = render(
      <Card 
        description={cardValues.description} 
        title={cardValues.title}
        starts={cardValues.starts}/>
    )

    const descriptionContainer = component.getByText(cardValues.description)
    const titleContainer = component.getByText(cardValues.title)
    const starts = component.getByText(cardValues.starts)

    expect(descriptionContainer).toBeInTheDocument();
    expect(titleContainer).toBeInTheDocument();
    expect(starts).toBeInTheDocument();
  })

  test('Should render component with image and super host', () => {
    const component = render(
      <Card 
        description={cardValues.description} 
        title={cardValues.title}
        starts={cardValues.starts}
        imageUrl={cardValues.imageUrl}
        superHost/>
    )

    const descriptionItem = component.getByText(cardValues.description)
    const titleItem = component.getByText(cardValues.title)
    const startsItem = component.getByText(cardValues.starts)
    const superHostItem = component.getByText('SUPER HOST')
    const imgItem = component.getByRole('img');

    expect(descriptionItem).toBeInTheDocument();
    expect(titleItem).toBeInTheDocument();
    expect(startsItem).toBeInTheDocument();
    expect(imgItem).toBeInTheDocument();
    expect(superHostItem).toBeInTheDocument();
  })
})
