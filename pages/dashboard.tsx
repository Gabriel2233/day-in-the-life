import { Avatar, Button, Flex, Spinner, Text } from "@chakra-ui/core";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { useAuth } from "../lib/auth";
import Link from "next/link";

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
    </Layout>
  );
}
