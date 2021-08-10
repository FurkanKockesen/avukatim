import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { SearchIcon } from '@heroicons/react/outline';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string('Enter your password').required('Password is required'),
});

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='max-w-full shadowLight bg-white  rounded-lg mx-auto mb-10'>
      <form className='w-11/12 mx-auto my-5' onSubmit={formik.handleSubmit}>
        <h1 className='text-2xl font-semibold text-avukatimKirmizi text-center'>
          Giriş Yap
        </h1>
        <div className='flex flex-row text-avukatimKirmizi text-xl font-semibold my-3'>
          <SearchIcon className='h-7' />
          <TextField
            fullWidth
            id='outlined-email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </div>
        <TextField
          fullWidth
          id='email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id='password'
          name='password'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          className='center'
          color='primary'
          variant='contained'
          type='submit'
        >
          Giriş Yap
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
