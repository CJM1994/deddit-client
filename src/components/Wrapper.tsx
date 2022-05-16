import { Box } from '@chakra-ui/react';
import { FC } from 'react'

interface WrapperProps {
  children: JSX.Element;
  variant: 'regular' | 'small';
}

const Wrapper: FC<WrapperProps> = ({ children, variant }) => {
  return (
    <Box
      marginTop={8}
      maxWidth={variant === 'regular' ? '800px' : '400px'}
      width={'100%'}
      marginX={'auto'}
    >
      {children}
    </Box>
  )
}

export default Wrapper;