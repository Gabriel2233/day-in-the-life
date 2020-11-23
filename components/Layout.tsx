import { Flex } from '@chakra-ui/core';
import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      w="full"
      h="full"
      align="center"
      justify="center"
      flexDir="column"
      background="red"
    >
      {children}
    </Flex>
  );
};
