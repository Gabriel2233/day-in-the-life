import {
  Button,
  CloseButton,
  Flex,
  Heading,
  IconButton,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { LightLayout } from "../components/LightLayout";
import { PostCreationElement } from "../components/PostCreationElement";
import { usePost } from "../contexts/PostContext";

import { BsQuestion } from "react-icons/bs";
import { isPrimitive } from "util";
import { PreviewPost } from "../components/PreviewPost";

export default function CreatePost() {
  const router = useRouter();

  const {
    createPost,
    handleSubmit,
    errors,
    togglePreview,
    isPreviewing,
    fullPostData,
  } = usePost();

  return (
    <Layout>
      <Header>
        <CloseButton onClick={() => router.back()} m={4} />
      </Header>

      <LightLayout>
        <Flex w="full" align="center" justify="space-between" my={8} px={8}>
          <Heading size="lg">Create a new Post</Heading>

          <Button
            onClick={togglePreview}
            bg="white"
            rounded="4px"
            color="blue.500"
            borderWidth={2}
            borderColor="blue.500"
          >
            Preview
          </Button>
        </Flex>

        <Flex
          w="full"
          align="center"
          justify="center"
          flexDir="column"
          as="form"
          onSubmit={handleSubmit(createPost)}
        >
          {isPreviewing ? <PreviewPost /> : <PostCreationElement />}

          <Flex w="90%" align="center" justify="space-between" my={10}>
            <IconButton
              onClick={() => router.push("/post-guide")}
              aria-label="Post Guide"
              icon={BsQuestion}
              bg="white"
              borderWidth={2}
              borderColor="gray.500"
            />

            <Button
              type="submit"
              w="100px"
              bg="blue.500"
              _hover={{ bg: "blue.600" }}
              color="white"
              d="flex"
            >
              Post
            </Button>
          </Flex>
        </Flex>
      </LightLayout>
    </Layout>
  );
}
