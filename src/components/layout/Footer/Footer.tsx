import { NavLink } from 'react-router-dom'
import { navigationItems } from '../../../data/navigation'
import { site } from '../../../data/site'
import { Container } from '../../ui/Container/Container'
import styles from './Footer.module.scss'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brandBlock}>
            <img src={site.assets.logoPath} alt="" className={styles.logo} width={56} height={56} />
            <p className={styles.clubName}>{site.club.fullName}</p>
            <p className={styles.description}>{site.club.description}</p>
          </div>

          <nav className={styles.navBlock} aria-label="Podnožje">
            <h2 className={styles.navTitle}>Navigacija</h2>
            <ul className={styles.navList}>
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} end={item.end} className={styles.navLink}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contactBlock}>
            <h2 className={styles.navTitle}>Kontakt</h2>
            <p>
              <a
                href={`mailto:${site.contact.email}`}
                className={styles.contactLink}
                aria-label={`Službeni e-mail kluba: ${site.contact.email}`}
              >
                {site.contact.email}
              </a>
            </p>
            <p>
              <a
                href={site.contact.phone.href}
                className={styles.contactLink}
                aria-label={`Telefon predsjednika kluba ${site.contact.president.name}: ${site.contact.phone.display}`}
              >
                {site.contact.phone.display}
              </a>
            </p>
            <p className={styles.location}>{site.club.location}</p>
          </div>
        </div>

        <p className={styles.copyright}>
          © {currentYear} {site.club.name}. Sva prava pridržana.
        </p>
      </Container>
    </footer>
  )
}
