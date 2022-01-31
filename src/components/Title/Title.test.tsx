import React from 'react'
import { render } from '@testing-library/react'
import Title from '.'

describe('Title component', () => {
  test('Should render component', () => {
    const badgeText = 'Title Component'
    const component = render(<Title>{badgeText}</Title>)
    const textContainer = component.getByText(badgeText)

    expect(textContainer).toBeInTheDocument();
  })
})

