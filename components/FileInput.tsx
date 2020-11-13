import { Flex, Input, StatLabel } from "@chakra-ui/core";

export const FileInput = ({ register }: { register: any }) => {
  return (
    <Flex>
      <Flex
        flexDir="column"
        align="center"
        justify="center"
        width="full"
        mx={4}
        my={6}
      >
        <StatLabel
          d={"flex"}
          justifyItems={"center"}
          bg="blue.500"
          rounded="4px"
          color="white"
          p={3}
          fontSize={"md"}
        >
          Choose a file
        </StatLabel>
        <Input
          ref={register}
          name="image"
          cursor={"pointer"}
          opacity={0}
          pos={"absolute"}
          type="file"
        />
      </Flex>
    </Flex>
  );
};
