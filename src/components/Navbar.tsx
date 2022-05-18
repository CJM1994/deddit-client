import { Box, Button, Flex, Link } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from '../generated/graphql';

interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => {

  const [{ fetching: logoutFetching }, logoutUser] = useLogoutMutation();

  const [{ data, fetching: meFetching }] = useMeQuery();
  let userLinks = null;

  // data is loading
  if (meFetching) {
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
        <Button marginLeft={2} isLoading={logoutFetching} onClick={() => { logoutUser() }}>Logout</Button>
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