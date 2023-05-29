import * as Yup from 'yup';

export const signUpSchema = Yup.object({
  fullname: Yup.string().min(2).max(25).required('Please enter your fullname'),
  email: Yup.string().email().required('Please enter your email'),
  phone: Yup.string().required('Please enter your phone number'),
  country: Yup.string().required('Please Select Country'),
  city: Yup.string().min(2).max(30).required('Please enter your city'),
  state: Yup.string().min(2).max(30).required('Please enter your state'),
  terms: Yup.boolean().required('Checked terms & condition'),
});

export const cardSchema = Yup.object({
  cardnumber: Yup.string()
    .min(12)
    .max(19)
    .required('Please inpur your card number'),
  fullname: Yup.string().min(2).max(25).required('Please enter your fullname'),
  month: '',
  year: '',
  cvc: '',
});
