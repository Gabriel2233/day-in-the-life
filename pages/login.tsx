import { Button, Flex, Heading } from '@chakra-ui/core';
import { useRouter } from 'next/router';

import { FiFacebook } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../lib/auth';

function Login() {
  const router = useRouter();

  const { signinWithGoogle, signinWithFacebook } = useAuth();

  return (
    <Layout>
      <Header>
        <Button onClick={() => router.back()} mx={6} my={4}>
          Back Home
        </Button>
      </Header>

      <Flex
        w="full"
        mt={'7rem'}
        align="center"
        justify="center"
        flexDir="column"
      >
        <Heading size="xl" py={8}>
          Log in
        </Heading>

        <Button
          w="300px"
          onClick={() => signinWithFacebook('/profile')}
          p={8}
          backgroundColor="blue.600"
          color="white"
          fontWeight="medium"
          leftIcon={FiFacebook}
          mt={4}
          _hover={{ bg: 'blue.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)',
          }}
        >
          Continue with Facebook
        </Button>
        <Button
          w="300px"
          onClick={() => signinWithGoogle('/profile')}
          p={8}
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          fontWeight="medium"
          leftIcon={FcGoogle}
          mt={4}
          _hover={{ bg: 'gray.100' }}
          _active={{
            bg: 'gray.100',
            transform: 'scale(0.95)',
          }}
        >
          Continue with Google
        </Button>
      </Flex>
    </Layout>
  );
}

export default Login;
