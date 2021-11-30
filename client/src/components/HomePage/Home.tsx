import { FC } from 'react';
import Link from 'next/link';
import styles from './Home.module.css';

export const Home: FC = () => (
  <div className={styles.container}>

    <h2 className="title">
      <Link href="/sign-in">
        <a href="https://nextjs.org">Sign in</a>
      </Link>
    </h2>

    <h2 className="title">
      <Link href="/dashboard">
        <a href="https://nextjs.org">Dashboard!</a>
      </Link>
    </h2>
  </div>
);
