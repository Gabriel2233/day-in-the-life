import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/core";
import { AuthModal } from "../components/AuthModal";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import Typed from "typed.js";
import { useEffect } from "react";

export default function Home() {
  const { onOpen, onClose, isOpen } = useDisclosure();

  const same = "Are you up to ";

  useEffect(() => {
    let typed = new Typed(".element", {
      strings: ["Find your new Hobby", "Find your new Carrer"],
      showCursor: false,
      loop: true,
      typeSpeed: 100,
    });

    return () => (typed = null);
  }, []);

  return (
    <Layout>
      <Header>
        <Button
          onClick={onOpen}
          my={2}
          mx={6}
          bg="blue.500"
          _hover={{ bg: "blue.400" }}
          color="white"
        >
          Get Started
        </Button>
      </Header>

      <AuthModal isOpen={isOpen} onClose={onClose} />

      <Flex w="full" align="center" justify="center" flexDir="column">
        <Heading className="element" w="full"></Heading>
      </Flex>
    </Layout>
  );
}
