import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/^[A-Za-z]+\s[A-Za-z]+$/, 'Invalid name')
    .required('Required'),
  number: yup
    .string()
    .matches(/^\d{16}$/, 'Invalid card number')
    .required('Required'),
  Month: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])$/, 'Invalid')
    .required('Required'),
  Year: yup
    .string()
    .matches(/^\d{2}$/, 'Invalid')
    .test('valid-year', 'Invalid', value => {
      const currentYear = new Date().getFullYear() % 100;
      return value >= currentYear;
    })
    .required('Required'),
  cvc: yup
    .string()
    .matches(/^\d{3}$/, 'Invalid')
    .required('Required')
});