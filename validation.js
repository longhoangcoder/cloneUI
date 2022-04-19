import * as Yup from 'yup';
export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(3, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
    .required("Please enter a password")
    .min(6, "Password must have at least 6 characters"),
    confirmPassword: Yup.string()
    .required("Please confirm password")
    .oneOf([Yup.ref("password")], "Password & Confirm Password does not match"),
  });