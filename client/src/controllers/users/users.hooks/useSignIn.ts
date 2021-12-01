import { MutationResult, useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { SIGN_IN_MUTATION } from '@/controllers/users/users.queries/signIn.mutation';
import { User } from '@/controllers/users/users.typedefs';
import { Routes } from '@/controllers/router/router.constants';

type SignInData = {
  signIn: User & { access_token: string };
}

type SignInVariables = {
  username: string;
  password: string;
}

interface UseSignIn {
  (): [
    (variables: SignInVariables) => void,
    MutationResult,
  ]
}

export const useSignIn: UseSignIn = () => {
  const router = useRouter();
  const [mutate, query] = useMutation<SignInData, SignInVariables>(
    SIGN_IN_MUTATION,
  );

  const callback = useCallback(async (variables: SignInVariables) => {
    const { data } = await mutate({
      variables,
    });

    if (data?.signIn) {
      localStorage.setItem('token', data.signIn.access_token);
      router.push(Routes.Dashboard);
    }
  }, [mutate]);

  return [callback, query];
};
