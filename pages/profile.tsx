import {
  Button,
  Flex,
  Heading,
  Image,
  Spinner,
  Tag,
  TagIcon,
  TagLabel,
  Text,
} from '@chakra-ui/core';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';

import { useRouter } from 'next/router';

import { useAuth } from '../lib/auth';
import { ImGoogle, ImFacebook2 } from 'react-icons/im';

export default function Profile() {
  const router = useRouter();
  const { user, signOut } = useAuth();

  if (user == null) return <Spinner />;

  const icon = user.provider === 'google.com' ? ImGoogle : ImFacebook2;

  return (
    <Layout>
      <Header>
        <Button m={4} onClick={() => router.back()}>
          Back to Dashboard
        </Button>
      </Header>

      <Flex w="full" align="center" justify="center">
        <Flex
          w="50%"
          align="center"
          justify="center"
          flexDir="column"
          background="white"
          my={'6rem'}
          borderWidth={2}
          borderColor="gray.100"
          rounded="8px"
        >
          <Heading size="xl" p={8} textAlign="start" w="full">
            My Account
          </Heading>

          <Flex w="full" align="center" justify="space-between">
            <Flex align="center">
              <Image
                src={user.photoUrl}
                alt={user.name}
                w={50}
                h={50}
                mx={8}
                rounded="50%"
              />

              <Text>{user.name}</Text>
            </Flex>

            <Flex m={8}>
              <Tag variantColor="blue">
                <TagLabel>Provider</TagLabel>
                <TagIcon icon={icon} />
              </Tag>
            </Flex>
          </Flex>

          <Text my={4}>Email: {user.email}</Text>

          <Button
            bg="red.500"
            _hover={{ bg: 'red.600' }}
            color="white"
            padding={4}
            rounded="4px"
            mx={4}
            my={6}
            d="flex"
            alignSelf="flex-end"
            onClick={() => signOut()}
          >
            Logout
          </Button>
        </Flex>
      </Flex>
    </Layout>
  );
}
