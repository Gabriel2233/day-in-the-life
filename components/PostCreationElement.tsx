import { Button, Flex, Input, Textarea } from "@chakra-ui/core";
import { usePost } from "../contexts/PostContext";
import { DropzoneArea } from "./DropzoneArea";
import { FileInput } from "./FileInput";

export const PostCreationElement = () => {
  const { removeImage, selectedFileUrl, register } = usePost();

  return (
    <Flex
      w="60%"
      align="flex-start"
      justify="center"
      flexDir="column"
      background="white"
      borderWidth={2}
      borderColor="gray.500"
      borderRadius="8px"
      p={8}
    >
      <Flex w="full" align="center" justify="start">
        <DropzoneArea />

        <Button
          d={selectedFileUrl === "" ? "none" : "block"}
          color="red.500"
          borderColor="red.500"
          borderWidth={2}
          rounded="4px"
          mx={6}
          bg="white"
          onClick={() => removeImage()}
        >
          Remove
        </Button>
      </Flex>

      <Input
        border={0}
        placeholder="Title Here"
        fontSize="3rem"
        _placeholder={{ color: "gray.600" }}
        _focus={{ outline: "none" }}
        my={8}
        name="title"
        ref={register}
      />

      <Input
        border={0}
        my={4}
        placeholder="Write four tags that match your post..."
        fontSize="1rem"
        _placeholder={{ color: "gray.600" }}
        _focus={{ outline: "none" }}
        name="tags"
        ref={register}
      />

      <FileInput register={register} />

      <Textarea
        border={0}
        resize="none"
        overflowY="hidden"
        placeholder="Write your post here..."
        _placeholder={{ color: "gray.600" }}
        _focus={{ outline: "none" }}
        my={4}
        name="content"
        ref={register}
      />
    </Flex>
  );
};
