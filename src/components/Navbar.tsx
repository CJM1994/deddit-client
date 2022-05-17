import { Box, Flex, Link } from '@chakra-ui/react';
import { FC } from 'react';
import NextLink from 'next/link';

interface NavbarProps { }

const Navbar: FC<NavbarProps> = () => {
  return (
    <Flex
      background='tomato'
      padding={4}
    >
      <Box marginLeft='auto'>
        <NextLink href='/login'>
          <Link marginRight={2}>Login</Link>
        </NextLink>
        <NextLink href='/register'>
          <Link>Register</Link>
        </NextLink>
      </Box>
    </Flex>
  )
}

export default Navbar;