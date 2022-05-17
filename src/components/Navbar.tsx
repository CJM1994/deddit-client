import { Box, Flex, Link } from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import NextLink from 'next/link';
import { useMeQuery } from '../generated/graphql';

interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => {

  const [{ data, error }] = useMeQuery();
  let userLinks = null;
  console.log('data', data)
  console.log('error', error)

  if (!data?.me) {
    userLinks =
      <>
        <Box marginLeft='auto'>
          <NextLink href='/login'>
            <Link marginRight={2}>Login</Link>
          </NextLink>
          <NextLink href='/register'>
            <Link>Register</Link>
          </NextLink>
        </Box>
      </>
  }

  return (
    <Flex
      background='tomato'
      padding={4}
    >
      {userLinks}
    </Flex>
  )
}

export default Navbar;