import { act } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';

import Navbar from './Navbar'

let container = document.createElement('div');
const root = createRoot(container)

it('renders navbar', () => {
    act(() => {  
        root.render(
            <MemoryRouter>
              <Navbar />
            </MemoryRouter>,
          );
    })
    const links = container.querySelectorAll('a')
    expect(links.length).toBe(2)
    expect(links[0].textContent).toBe("Home")
    expect(links[1].textContent).toBe("Sign In")
})

