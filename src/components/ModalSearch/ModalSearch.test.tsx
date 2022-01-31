import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import ModalSearch from '.'

describe('Badge component', () => {
  test('Should render component and functions', () => {
    const setOpen = jest.fn();
    const component = render(<ModalSearch open setOpen={setOpen}/>)
    const textContainer = component.getByText('Edit your search')
    const closeButton = component.getByRole('presentation')

    expect(textContainer).toBeInTheDocument();
    fireEvent.click(closeButton)
    expect(setOpen).toHaveBeenCalledTimes(1)
  })
})
