import type { GetServerSideProps, NextPage } from 'next';
import { initApolloClient } from '@/controllers/apollo/apollo.client';
import { AUTH_USER_QUERY } from '@/controllers/users/users.queries/authUser.query';
import { AuthUserData } from '@/controllers/users/users.hooks/useAuthUser';
import { Routes } from '@/controllers/router/router.constants';

const HomePage: NextPage = () => null;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apolloClient = initApolloClient(ctx.req.headers);

  try {
    await apolloClient.query<AuthUserData>({
      query: AUTH_USER_QUERY,
    });

    return {
      props: {},
      redirect: {
        permanent: false,
        destination: Routes.Dashboard,
      },
    };
  } catch {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: Routes.SignIn,
      },
    };
  }
};

export default HomePage;
