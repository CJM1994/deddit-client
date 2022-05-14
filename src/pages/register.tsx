import { FC } from 'react';
import { Button, FormControl, FormLabel, FormErrorMessage, Input } from '@chakra-ui/react'
import { Form, Field, Formik } from 'formik';

interface registerProps {

}

const Register: FC<registerProps> = () => {

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={values => { console.log(values); }}
    >
      {({ values, handleChange }) => (
        <Form>

        </Form>
      )}
    </Formik>
  )

}

export default Register;