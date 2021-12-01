import { QueryResult, useQuery } from '@apollo/client';
import { useMemo } from 'react';
import { AUTH_USER_QUERY } from '@/controllers/users/users.queries/authUser.query';
import { User } from '@/controllers/users/users.typedefs';

type AuthUserData = {
  authUser: User;
}

export const useAuthUser = (): [User | null, QueryResult] => {
  const authUserQuery = useQuery<AuthUserData>(AUTH_USER_QUERY);

  return useMemo(() => [
    authUserQuery.data?.authUser || null,
    authUserQuery,
  ], []);
};
