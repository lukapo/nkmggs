import { useEffect, useRef, type RefObject } from 'react'
import { NavLink } from 'react-router-dom'
import { navigationItems } from '../../../data/navigation'
import { Button } from '../../ui/Button/Button'
import styles from './MobileMenu.module.scss'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  menuButtonRef: RefObject<HTMLButtonElement | null>
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function MobileMenu({ isOpen, onClose, menuButtonRef }: MobileMenuProps) {
  const panelRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const panel = panelRef.current
    const main = document.getElementById('main-content')
    const footer = document.querySelector('footer')

    main?.setAttribute('inert', '')
    footer?.setAttribute('inert', '')
    document.body.style.overflow = 'hidden'

    const getFocusableElements = () => {
      if (!panel) return []

      const panelItems = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
        (element) => !element.hasAttribute('disabled') && element.offsetParent !== null,
      )
      const menuButton = menuButtonRef.current

      return menuButton ? [menuButton, ...panelItems] : panelItems
    }

    const focusables = getFocusableElements()
    const firstPanelItem = focusables.find((element) => element !== menuButtonRef.current)
    firstPanelItem?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const items = getFocusableElements()
      if (items.length === 0) return

      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement

      if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      main?.removeAttribute('inert')
      footer?.removeAttribute('inert')
    }
  }, [isOpen, onClose, menuButtonRef])

  if (!isOpen) return null

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Mobilna navigacija"
      onClick={onClose}
    >
      <nav
        id="mobile-navigation"
        ref={panelRef}
        className={styles.panel}
        aria-label="Glavna navigacija"
        onClick={(event) => event.stopPropagation()}
      >
        <ul className={styles.list}>
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                onClick={onClose}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.donate}>
          <Button asChild variant="primary" size="md" className={styles.donateBtn} to="/donacije" onClick={onClose}>
            Doniraj
          </Button>
        </div>
      </nav>
    </div>
  )
}
