import { FC } from 'react';
import { Form, Formik } from 'formik';
import InputField from '../components/InputField';
import { Button } from '@chakra-ui/react';
import { useQuery } from 'urql';

interface registerProps {

}

const Register: FC<registerProps> = () => {

  const helloQuery = `
  query Query {
    hello
  }
  `

  const [result, reexecuteQuery] = useQuery({
    query: helloQuery
  })

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={values => { console.log(values); }}
    >
      {({ values, handleChange, isSubmitting }) => (
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
          <p>{`${result.data.hello}`}</p>
        </Form>
      )}
    </Formik>
  )

}

export default Register;