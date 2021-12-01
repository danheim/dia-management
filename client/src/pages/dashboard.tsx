import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { DashboardModule } from '@/components/Dashboard';
import { initApolloClient } from '@/controllers/apollo/apollo.client';
import { AuthUserData } from '@/controllers/users/users.hooks/useAuthUser';
import { AUTH_USER_QUERY } from '@/controllers/users/users.queries/authUser.query';
import { Routes } from '@/controllers/router/router.constants';

const DashboardPage: NextPage = () => (
  <DashboardModule />
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apolloClient = initApolloClient(ctx.req.headers);

  try {
    await apolloClient.query<AuthUserData>({
      query: AUTH_USER_QUERY,
    });

    return {
      props: {},
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

export default DashboardPage;
