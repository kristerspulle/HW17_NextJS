import Link from 'next/link';
import styles from './Navbar.module.css'

export const Navbar = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <Link href={'/'}>KP Blogs</Link>
    </nav>
  )
}