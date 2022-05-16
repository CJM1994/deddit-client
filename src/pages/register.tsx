import { FC } from 'react';
import { Form, Formik } from 'formik';
import InputField from '../components/InputField';
import { Button } from '@chakra-ui/react';
import Wrapper from '../components/Wrapper';
import { useRegisterMutation } from '../generated/graphql';
import { errorMap } from '../utils/errorMap';
import { useRouter } from 'next/router';

interface registerProps { }

const Register: FC<registerProps> = () => {

  const [registerUserResult, registerUser] = useRegisterMutation()
  const router = useRouter()

  return (
    <Wrapper variant='small'>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await registerUser(values);
          if (response.data?.register.errors) {
            setErrors(errorMap(response.data.register.errors))
          } else if (response.data?.register.user) {
            router.push('/');
          }
        }}
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