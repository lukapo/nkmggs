import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navigationItems } from '../../../data/navigation'
import { site } from '../../../data/site'
import { Button } from '../../ui/Button/Button'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import styles from './Header.module.scss'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    requestAnimationFrame(() => menuButtonRef.current?.focus())
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((open) => !open)
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <NavLink to="/" className={styles.brand} aria-label={`${site.name} — početna`}>
            <img src={site.logoPath} alt="" className={styles.logo} width={48} height={48} />
            <span className={styles.brandText}>
              <span className={styles.clubName}>{site.name}</span>
              <span className={styles.location}>{site.location}</span>
            </span>
          </NavLink>

          <nav className={styles.desktopNav} aria-label="Glavna navigacija">
            <ul className={styles.navList}>
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.end}
                    className={({ isActive }) =>
                      isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Button asChild variant="primary" size="sm" className={styles.donateBtn} to="/donacije">
              Doniraj
            </Button>
            <button
              ref={menuButtonRef}
              type="button"
              className={styles.menuButton}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-haspopup="dialog"
              aria-label={isMenuOpen ? 'Zatvori izbornik' : 'Otvori izbornik'}
              onClick={toggleMenu}
            >
              <span className={styles.menuIcon} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} menuButtonRef={menuButtonRef} />
    </>
  )
}
