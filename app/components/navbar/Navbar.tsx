import Link from 'next/link';
import styles from './Navbar.module.css';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import {SignOutButton} from '@components/Button/Button';

export const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return ( session ? (
    <nav className={styles.nav}>
      <Link className={styles.link} href={'/protected'}>
        All blogs
      </Link>
      <Link className={styles.link} href={'/protected/comments'}>
        All comments
      </Link>
      <Link className={styles.link} href={'/protected/newblog'}>
        New Blog
      </Link>
      <SignOutButton type='button' text='Sign out'/>
      <p>Hello, {session.user?.username}</p>
    </nav>
    ) : (
    <nav className={styles.nav}>
      <Link className={styles.link} href={'/'}>
        KP Blogs
      </Link>
    </nav>
    )
  );
};
