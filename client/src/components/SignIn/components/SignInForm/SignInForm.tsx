import {
  FC, FormEvent, useCallback, useState,
} from 'react';
import cn from 'classnames';
import { useSignIn } from '@/controllers/users/users.hooks/useSignIn';
import { UserErrors } from '@/controllers/users/users.constants';

export const SignInForm: FC = () => {
  const [signIn, { loading }] = useSignIn();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState<string | null>(null);

  const onSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    if (!username || !password) {
      setError(UserErrors.FillCredentials);
      return;
    }

    try {
      await signIn({
        username,
        password,
      });
    } catch (serverError) {
      setError(UserErrors.InvalidCredentials);
    }
  }, [username, password]);

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <label className="label" htmlFor="username">User</label>
        <div className="control">
          <input
            id="username"
            className={cn('input', { 'is-danger': error })}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => {
              setError(null);
              setUsername(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="password">Password</label>
        <p className="control">
          <input
            id="password"
            className={cn('input', { 'is-danger': error })}
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setError(null);
              setPassword(event.target.value);
            }}
          />
        </p>
      </div>

      {error && (
        <div className="field">
          <p className="help is-danger">Invalid credentials</p>
        </div>
      )}

      <div className="field is-grouped">
        <div className="control">
          <button
            disabled={loading}
            type="submit"
            className="button is-link"
          >
            Submit
          </button>
        </div>
      </div>

    </form>
  );
};
