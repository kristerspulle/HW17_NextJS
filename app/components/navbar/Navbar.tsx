import Link from 'next/link';
import styles from './Navbar.module.css'

export const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} href={'/'}>KP Blogs</Link>
    </nav>
  )
}