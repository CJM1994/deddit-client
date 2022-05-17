import { Box, Flex, Link } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';
import { useMeQuery } from '../generated/graphql';

interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => {

  const [{ data, fetching }] = useMeQuery();
  let userLinks = null;

  // data is loading
  if (fetching) {
    // user is not logged in
  } else if (!data?.me) {
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
    // user is logged in
  } else {
    userLinks =
      <Box marginLeft='auto'>
        {data.me.username}
        <Link marginLeft={2}>Logout</Link>
      </Box>
  }

  return (
    <Flex
      background='teal'
      padding={4}
    >
      {userLinks}
    </Flex>
  )
}

export default Navbar;