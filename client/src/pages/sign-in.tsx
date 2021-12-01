import type { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { SignInModule } from '@/components/SignIn';
import { initApolloClient } from '@/controllers/apollo/apollo.client';
import { AuthUserData } from '@/controllers/users/users.hooks/useAuthUser';
import { AUTH_USER_QUERY } from '@/controllers/users/users.queries/authUser.query';
import { Routes } from '@/controllers/router/router.constants';

const SignInPage: NextPage = () => (
  <SignInModule />
);

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
    };
  }
};

export default SignInPage;
