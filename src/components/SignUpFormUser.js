import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import { LockClosedIcon, MailIcon, UserIcon } from '@heroicons/react/solid';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('İsim'),
  lastName: Yup.string().required('Soyisim'),
  email: Yup.string().email('Geçersiz Email').required('Email Zorunludur'),
  password: Yup.string()
    .min(6, 'Şifre En 6 Karakter İçermeli')
    .required('Şifre Zorunludur'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Şifre Tekrarı Yanlış')
    .required('Şifre Tekrarı Zorunludur'),
});
function SignUpFormUser() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleSubmit,
        handleReset,
        handleChange,
        setFieldValue,
      }) => (
        <Form
          className='relative w-11/12 mx-auto flex flex-col my-3'
          onSubmit={handleSubmit}
        >
          <div className='w-full'>
            <div
              className={`transition duration-500 ease-in-out inline-flex flex-row min-w-full bg-mainColor-mainGray items-center p-1 rounded border shadow-inner
               focus-within:outline focus-within:shadow-outline focus-within:border-avukatimKirmizi ${
                 (errors.firstName && touched.firstName) ||
                 (errors.lastName && touched.firstName)
                   ? 'border-avukatimKirmizi'
                   : ''
               }`}
            >
              <UserIcon className='h-5 text-avukatimKirmizi' />
              <Field
                id='firstName'
                name='firstName'
                type='text'
                className='focus:outline-none bg-mainColor-mainGray ml-3 w-5/12 placeholder-avukatimKirmizi placeholder-opacity-50'
                placeholder='İsim'
                value={values.firstName}
                onChange={handleChange}
              />
              <Field
                id='lastName'
                name='lastName'
                type='text'
                className='focus:outline-none bg-mainColor-mainGray w-5/12 placeholder-avukatimKirmizi placeholder-opacity-50'
                placeholder='Soyisim'
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div className='text-opacity-60 text-avukatimKirmizi text-sm font-light m-1'>
              {(errors.firstName && touched.firstName) ||
              (errors.lastName && touched.firstName) ? (
                <p>
                  {errors.firstName} {errors.lastName} Girilmedi
                </p>
              ) : (
                <p className='invisible'>a</p>
              )}
            </div>
          </div>
          <div className='w-full'>
            <div
              className={`transition duration-500 ease-in-out inline-flex flex-row min-w-full bg-mainColor-mainGray items-center p-1 rounded border shadow-inner
               focus-within:outline focus-within:shadow-outline focus-within:border-avukatimKirmizi ${
                 errors.email && touched.email ? 'border-avukatimKirmizi' : ''
               }`}
            >
              <MailIcon className='h-5 text-avukatimKirmizi' />
              <Field
                id='email'
                name='email'
                type='email'
                className='focus:outline-none bg-mainColor-mainGray mx-3 placeholder-avukatimKirmizi placeholder-opacity-50'
                placeholder='Mail'
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className='text-opacity-60 text-avukatimKirmizi text-sm font-light m-1'>
              {errors.email && touched.email ? (
                <p>{errors.email}</p>
              ) : (
                <p className='invisible'>a</p>
              )}
            </div>
          </div>
          <div className='w-full'>
            <div
              className={`transition duration-500 ease-in-out inline-flex flex-row min-w-full bg-mainColor-mainGray items-center p-1 rounded border shadow-inner
               focus-within:outline focus-within:shadow-outline focus-within:border-avukatimKirmizi ${
                 (errors.password && touched.password) ||
                 (errors.confirmPassword && touched.confirmPassword)
                   ? 'border-avukatimKirmizi'
                   : ''
               }`}
            >
              <LockClosedIcon className='h-5 text-avukatimKirmizi' />
              <Field
                id='password'
                name='password'
                type='password'
                className='focus:outline-none bg-mainColor-mainGray ml-3 w-5/12 placeholder-avukatimKirmizi placeholder-opacity-50'
                placeholder='Şifre'
                value={values.password}
                onChange={handleChange}
              />
              <p className='h-5 border-l border-avukatimKirmizi'></p>
              <Field
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                className='focus:outline-none bg-mainColor-mainGray ml-3 w-5/12 placeholder-avukatimKirmizi placeholder-opacity-50'
                placeholder='Şifre Tekrarı'
                value={values.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className='text-opacity-60 text-avukatimKirmizi text-sm font-light mx-1 my-1 flex flex-row justify-between'>
              {errors.password && touched.password ? (
                <p>{errors.password}</p>
              ) : (
                <p className='invisible'>a</p>
              )}
              {errors.password &&
              touched.password &&
              errors.confirmPassword &&
              touched.password ? (
                <p>{errors.confirmPassword}</p>
              ) : (
                <p className='invisible'>a</p>
              )}
            </div>
          </div>

          <button
            type='submit'
            className='self-center text-white cursor-pointer mx-3 my-3 h-8 px-2 w-full text-center bg-avukatimKirmizi rounded-md transition-colors duration-500 focus:shadow-outline hover:bg-avukatimKirmizi-dark'
          >
            Kayıt Ol
          </button>
          <div className='flex flex-col justify-center items-center my-3'>
            <p className='text-opacity-60 text-avukatimKirmizi text-sm font-light'>
              Hesabın Varmı?
            </p>

            <div className='inline-flex flex-row items-center'>
              <p className='w-4 border-b border-avukatimKirmizi'></p>
              <p className='text-opacity-100 text-avukatimKirmizi text-md font-bold mx-1'>
                Hemen Giriş Yap
              </p>
              <p className='w-4 border-b border-avukatimKirmizi'></p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SignUpFormUser;
