import { Button, CloseButton, Flex, Heading } from "@chakra-ui/core";
import { useRouter } from "next/router";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { LightLayout } from "../components/LightLayout";
import { PostCreationElement } from "../components/PostCreationElement";
import Link from "next/link";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object().shape({
  title: yup.string().required().min(8).max(33),
  tags: yup.string().required(),
  content: yup.string().required(),
});

export default function CreatePost() {
  const router = useRouter();

  const { errors, handleSubmit, register } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const createPost = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <Header>
        <CloseButton onClick={() => router.back()} m={4} />
      </Header>

      <LightLayout>
        <Flex w="full" align="center" justify="space-between" my={8} px={8}>
          <Heading size="lg">Create a new Post</Heading>

          <Link href="/post-guide">
            <Button bg="white" rounded="4px" color="blue.500">
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
          <PostCreationElement register={register} />

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
