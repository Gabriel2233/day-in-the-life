import { Button, CloseButton, Flex, Heading } from "@chakra-ui/core";
import { useRouter } from "next/router";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { LightLayout } from "../components/LightLayout";
import { PostCreationElement } from "../components/PostCreationElement";

export default function CreatePost() {
  const router = useRouter();

  return (
    <Layout>
      <Header>
        <CloseButton onClick={() => router.back()} m={4} />
      </Header>
      <LightLayout>
        <Heading size="lg" p={8} w="full">
          Create a new Post
        </Heading>

        <PostCreationElement />

        <Button
          w="100px"
          my={8}
          mx={12}
          bg="blue.500"
          _hover={{ bg: "blue.600" }}
          p={5}
          rounded="4px"
          color="white"
          d="flex"
          alignSelf="flex-end"
        >
          Post
        </Button>
      </LightLayout>
    </Layout>
  );
}
