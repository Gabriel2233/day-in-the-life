import { Flex, Text } from "@chakra-ui/core";
import { ReactNode } from "react";

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <Flex w="full" align="center" justify="space-between" background="white">
      <Flex align="center">
        <Text p={4}>Logo Here</Text>
      </Flex>

      <Flex align="center">{children}</Flex>
    </Flex>
  );
};
