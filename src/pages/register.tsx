import { FC } from 'react';
import { Form, Formik } from 'formik';
import InputField from '../components/InputField';
import { Button } from '@chakra-ui/react';
import { useMutation } from 'urql';
import Wrapper from '../components/Wrapper';

interface registerProps {

}

const Register: FC<registerProps> = () => {

  const RegisterUser = `
  mutation Register($username: String!, $password: String!) {
    register(input: {username: $username, password: $password}) {
      user {
        id
        username
        createdAt
        updatedAt
      }
      errors {
        field
        message
      }
    }
  }
  `

  const [registerUserResult, registerUser] = useMutation(RegisterUser)

  return (
    <Wrapper>
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