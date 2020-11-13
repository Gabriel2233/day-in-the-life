import { Button, CloseButton, Flex, Heading } from "@chakra-ui/core";
import { useRouter } from "next/router";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { LightLayout } from "../components/LightLayout";
import { PostCreationElement } from "../components/PostCreationElement";
import Link from "next/link";
import { usePost } from "../contexts/PostContext";

export default function CreatePost() {
  const router = useRouter();

  const { createPost, handleSubmit, errors } = usePost();

  return (
    <Layout>
      <Header>
        <CloseButton onClick={() => router.back()} m={4} />
      </Header>

      <LightLayout>
        <Flex w="full" align="center" justify="space-between" my={8} px={8}>
          <Heading size="lg">Create a new Post</Heading>

          <Link href="/post-guide">
            <Button bg="white" rounded="4px" color="black">
              Writing a good post
            </Button>
          </Link>
        </Flex>

        <Flex
          w="full"
          align="center"
          justify="center"
          flexDir="column"
          as="form"
          onSubmit={handleSubmit(createPost)}
        >
          <PostCreationElement />

          <Button
            type="submit"
            w="100px"
            bg="blue.500"
            _hover={{ bg: "blue.600" }}
            p={5}
            rounded="4px"
            color="white"
            d="flex"
            alignSelf="flex-end"
            m={10}
          >
            Post
          </Button>
        </Flex>
      </LightLayout>
    </Layout>
  );
}
