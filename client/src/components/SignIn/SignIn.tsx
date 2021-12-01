import { FC } from 'react';
import { SignInForm } from '@/components/SignIn/components/SignInForm';

export const SignInModule: FC = () => (
  <div className="columns pt-6">
    <div className="column is-2 is-offset-5">
      <SignInForm />
    </div>
  </div>
);
