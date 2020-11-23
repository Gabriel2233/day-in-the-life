import { Button, Flex, Heading, Text } from '@chakra-ui/core';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import Typed from 'typed.js';
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Header>
        <Link href="/login">
          <Button
            my={2}
            mx={6}
            bg="blue.500"
            _hover={{ bg: 'blue.400' }}
            color="white"
          >
            Get Started
          </Button>
        </Link>
      </Header>

      <Flex
        my={'4rem'}
        align="center"
        justify="center"
        flexDir="column"
        w="full"
      >
        <Heading
          textAlign="center"
          className="element"
          size="2xl"
          w="full"
          mt={20}
          mb={4}
          px={8}
        >
          Auth Example Template
        </Heading>
        <Text
          fontSize="1.2rem"
          color="gray.800"
          w="full"
          px={8}
          textAlign="center"
        >
          This is a sample app on how to authenticate users using Firebase
          providers.
        </Text>

        <Link href="/login">
          <Button
            mx={8}
            my={8}
            p={6}
            borderWidth={2}
            borderColor="blue.500"
            borderRadius="8px"
            color="blue.500"
            bg="white"
          >
            Start the fun!
          </Button>
        </Link>
      </Flex>
    </Layout>
  );
}
