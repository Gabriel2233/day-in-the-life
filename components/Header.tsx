import { Flex, Icon } from "@chakra-ui/core";
import { ReactNode } from "react";

import { BsFilePost } from "react-icons/bs";

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <Flex w="full" align="center" justify="space-between" background="white">
      <Flex align="center">
        <Icon as={BsFilePost} mt={6} mx={6} fontSize="48px" />
      </Flex>

      <Flex align="center">{children}</Flex>
    </Flex>
  );
};
