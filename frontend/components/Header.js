import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '../utils/CartContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link href="/" className="logo">
            <span style={{ fontSize: '1.5rem' }}>👘</span>
            <span>المتجر المغربي</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'none'
            }}
            className="mobile-menu-toggle"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {/* Navigation Links */}
          <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <Link href="/" className="nav-link">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/products" className="nav-link">
                المنتجات
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">
                من نحن
              </Link>
            </li>
            <li>
              <Link href="/cart" className="nav-link cart-icon">
                <span style={{ fontSize: '1.2rem' }}>🛒</span>
                {getTotalItems() > 0 && (
                  <span className="cart-count">{getTotalItems()}</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block !important;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #c1272d, #0066cc);
            flex-direction: column;
            padding: 1rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
          }

          .nav-links.mobile-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-links li {
            width: 100%;
            text-align: center;
            margin: 0.5rem 0;
          }
        }
      `}</style>
    </header>
  )
}