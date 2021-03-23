import * as Yup from 'yup';

export const defaultValues = {
  email: '',
  password: '',
  userName: '',
  verifyPassword: '',
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required').min(8, 'atleast 8 char'),
  verifyPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'passwords must match'),
  userName: Yup.string()
    .required('Required')
    .matches(/^\S*$/, 'No spaces')
    .min(3, 'must be atleast 3 char'),
});
