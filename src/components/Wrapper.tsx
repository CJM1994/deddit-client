import { Box } from '@chakra-ui/react';
import { FC } from 'react'

interface WrapperProps {
  children: JSX.Element;
}

const Wrapper: FC<WrapperProps> = (props) => {
  return (
    <Box
      marginTop={8}
      maxWidth={'800px'}
      width={'100%'}
      marginX={'auto'}
    >
      {props.children}
    </Box>
  )
}

export default Wrapper;