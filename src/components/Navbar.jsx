import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src='/logo.svg' alt='apple logo' />

        <ul> {navLinks.map((link)=>(
                <li key={link.label}>
                    <a>
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>

        <div className='flex-center gap-3'>
            <button>
                <img src='/search.svg' alt='search' />
            </button>
            <button>
                <img src='/cart.svg' alt='cart' />
            </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
