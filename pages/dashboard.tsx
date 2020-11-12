import { Avatar, Button, Flex, Spinner } from "@chakra-ui/core";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { useAuth } from "../lib/auth";
import Link from "next/link";
import { SideMenu } from "../components/SideMenu";

export default function Dashboard() {
  const { user } = useAuth();

  if (user === null) return <Spinner />;

  return (
    <Layout>
      <Header>
        <Link href="/create-post">
          <Button
            bg="blue.500"
            color="white"
            _hover={{ bg: "blue.600" }}
            my={4}
          >
            Create a post
          </Button>
        </Link>

        <Link href="/profile">
          <Avatar
            src={user.photoUrl}
            size="sm"
            ml={4}
            mr={8}
            cursor="pointer"
          />
        </Link>
      </Header>

      <Flex w="full" align="center" justify="center">
        <SideMenu />

        <Flex
          w="80%"
          align="center"
          justify="center"
          flexDir="column"
          my={"4rem"}
        ></Flex>
      </Flex>
    </Layout>
  );
}
