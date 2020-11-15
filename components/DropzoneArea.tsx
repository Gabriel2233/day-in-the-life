import { Flex, Icon, Image, Input, Text } from "@chakra-ui/core";
import { useDropzone } from "react-dropzone";
import { FiImage } from "react-icons/fi";
import { usePost } from "../contexts/PostContext";

export const DropzoneArea = () => {
  const { onDrop, coverImgUrl } = usePost();
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Flex
      {...getRootProps()}
      w="50%"
      h="150px"
      borderWidth={2}
      rounded="8px"
      borderColor="gray.200"
      cursor="pointer"
      mb={8}
    >
      <Input {...getInputProps()} size="lg" w="full" h="250px" bg="red" />
      {coverImgUrl !== "" ? (
        <Flex w="full" align="center" justify="center">
          <Image src={coverImgUrl} alt="cover" w="full" h="full" />
        </Flex>
      ) : (
        <Flex align="center" justify="center" flexDir="column" w="full">
          <Icon as={FiImage} fontSize="33px" mx={2} />
          <Text>Add cover Image</Text>
        </Flex>
      )}
    </Flex>
  );
};
