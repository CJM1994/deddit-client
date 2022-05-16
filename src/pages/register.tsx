import { FC } from 'react';
import { Form, Formik } from 'formik';
import InputField from '../components/InputField';
import { Button } from '@chakra-ui/react';
import Wrapper from '../components/Wrapper';
import { useRegisterMutation } from '../generated/graphql';

interface registerProps { }

const Register: FC<registerProps> = () => {

  const [registerUserResult, registerUser] = useRegisterMutation()

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={values => { return registerUser(values) }}
      >
        {({ isSubmitting }) => (
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
              type='password'
            />
            <Button
              type='submit'
              colorScheme='teal'
              marginTop={4}
              isLoading={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  )

}

export default Register;