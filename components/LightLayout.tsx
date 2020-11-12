import { Flex } from "@chakra-ui/core";
import { ReactNode } from "react";

export const LightLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      w="full"
      align="center"
      justify="flex-start"
      backgroundColor="gray.100"
      flexDir="column"
      mt={"4rem"}
      minH="100vh"
    >
      {children}
    </Flex>
  );
};
