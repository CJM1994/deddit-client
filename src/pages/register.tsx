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

          <FormControl>
            <FormLabel htmlFor='username'>Username</FormLabel>
            <Input value={values.username} onChange={handleChange} id='username' placeholder='username' />
            {/* <FormErrorMessage>{form.errors.name}</FormErrorMessage> */}
          </FormControl>

        </Form>
      )}
    </Formik>
  )

}

export default Register;