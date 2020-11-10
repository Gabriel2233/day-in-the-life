import {
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/core";

import { FiFacebook } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

type Props = {
  onClose(): void;
  isOpen: boolean;
};

export const AuthModal = ({ isOpen, onClose }: Props) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent rounded="8px">
          <Flex backgroundColor="blue.400" w="full" p={1} roundedTop="8px" />
          <ModalHeader mt={4} fontSize="2xl" textAlign="center">
            Sign in to start
          </ModalHeader>
          <ModalCloseButton mt={2} />
          <ModalBody>
            <Flex w="full" align="center" justify="center" flexDir="column">
              <Button
                w="60%"
                backgroundColor="blue.600"
                color="white"
                fontWeight="medium"
                leftIcon={FiFacebook}
                mt={4}
                p={6}
                _hover={{ bg: "blue.700" }}
                _active={{
                  bg: "blue.800",
                  transform: "scale(0.95)",
                }}
              >
                Continue with Facebook
              </Button>
              <Button
                w="60%"
                backgroundColor="white"
                color="gray.900"
                variant="outline"
                fontWeight="medium"
                leftIcon={FcGoogle}
                mt={8}
                mb={12}
                p={6}
                _hover={{ bg: "gray.100" }}
                _active={{
                  bg: "gray.100",
                  transform: "scale(0.95)",
                }}
              >
                Continue with Google
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
