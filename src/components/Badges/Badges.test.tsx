import React from 'react'
import { render } from '@testing-library/react'
import Badge from '.'

describe('Badge component', () => {
  test('Should render component', () => {
    const badgeText = 'Badge Component'
    const component = render(<Badge>{badgeText}</Badge>)
    const textContainer = component.getByText(badgeText)

    expect(textContainer).toBeInTheDocument();
  })
})

