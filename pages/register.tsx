import { FC } from 'react';
import { Form, Formik } from 'formik';
import InputField from '../components/InputField';
import { Button } from '@chakra-ui/react';

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
          <InputField
            name='username'
            placeholder='username'
            label='Username'
          />
          <InputField
            name='password'
            placeholder='password'
            label='Password'
          />
          <Button
            type='submit'
            colorScheme='teal'
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )

}

export default Register;