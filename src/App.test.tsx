import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { routes } from './App'

describe('Tibro route registration', () => {
  it('renders the home page', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] })
    render(<RouterProvider router={router} />)
    expect(await screen.findByText(/Journeys with quiet precision/i)).toBeInTheDocument()
  })

  it('renders a generated luxury tour page', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/luxury-holidays/morocco-7n-cultural'] })
    render(<RouterProvider router={router} />)
    expect(await screen.findByRole('heading', { name: /Magnificent Morocco/i })).toBeInTheDocument()
  })

  it('renders a trade fair package page', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/package/itma-2027'] })
    render(<RouterProvider router={router} />)
    expect(await screen.findByRole('heading', { name: /ITMA 2026/i })).toBeInTheDocument()
  })
})
