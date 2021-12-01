import { FC } from 'react';
import Link from 'next/link';
import styles from '@/components/HomePage/Home.module.css';
import { Routes } from '@/controllers/router/router.constants';

export const Home: FC = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      <Link href={Routes.SignIn}>
        <a href="##">Sign-in</a>
      </Link>
    </h2>

    <h2 className={styles.title}>
      <Link href={Routes.Dashboard}>
        <a href="##">Dashboard</a>
      </Link>
    </h2>
  </div>
);
