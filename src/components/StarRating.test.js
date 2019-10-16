import { render } from '@testing-library/react'
import React from 'react'
import "@testing-library/jest-dom/extend-expect"
import StarRating from "./StarRating"


test('first test', () => {
    const { getByTitle } = render(<StarRating rating={0} />)
    expect(getByTitle("0 Stars")).toBeInTheDocument()

    render(<StarRating rating={4} />)
    expect(getByTitle("4 Stars")).toBeInTheDocument()
})

