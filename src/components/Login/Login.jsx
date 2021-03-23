import { fb } from 'service';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import { FormField } from 'components';
import { useHistory } from 'react-router-dom';
import { defaultValues, validationSchema } from './formikConfig';

export const Login = () => {
  const history = useHistory();
  const [serverError, setServerError] = useState(' ');

  const login = ({ email, password }, { setSubmitting }) => {
    fb.auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        if (!res.user) {
          setServerError('we are unable to log you in. please try again.');
        }
      })
      .catch(err => {
        if (err.code === 'auth/wrong-password') {
          setServerError('invalid credential');
        } else if (err.code === 'auth/user-not-found') {
          setServerError('account does not exist for this email');
        } else {
          setServerError('Something went wrong :(');
        }
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div className="auth-form">
      <h1>Login</h1>

      <Formik
        onSubmit={login}
        validateOnMount={true}
        initialValues={defaultValues}
        validationSchema={validationSchema}
      >
        {({ isValid, isSubmitting }) => (
          <Form>
            <FormField name="email" label="Email" type="email" />
            <FormField name="password" label="Password" type="password" />

            <div className="auth-link-container">
              Don't have an account?{' '}
              <span
                className="auth-link"
                onClick={() => history.push('signup')}
              >
                Sign up!
              </span>
            </div>

            <button type="submit" disabled={!isValid || isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
      {!!serverError && <div className="error">{serverError}</div>}
    </div>
  );
};
