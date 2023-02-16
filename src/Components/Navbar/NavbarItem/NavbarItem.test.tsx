import { act } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import NavbarItem from './NavbarItem'

let container = document.createElement('div');
const root = createRoot(container)

it('renders navbar item', () => {
  const content = 'Login'
  const route = '/login'
  act(() => {
    root.render(
      <MemoryRouter>
        <NavbarItem
          content={content}
          route={route}
        />
      </MemoryRouter>
    )
  })
  const links = container.querySelectorAll('a')
  expect(links.length).toBe(1)
  const targetLink = links[0]
  expect(targetLink.textContent).toBe(content)
  expect(targetLink.href).toBe(`http://localhost${route}`)
})

