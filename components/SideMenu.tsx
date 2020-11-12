import {
  Button,
  Flex,
  Icon,
  SimpleGrid,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/core";
import { HiHeart, HiTag } from "react-icons/hi";

import Link from "next/link";

export const SideMenu = () => {
  return (
    <Flex
      w="20%"
      h="100%"
      pos="fixed"
      top={"75px"}
      left={0}
      align="center"
      justify="start"
      flexDir="column"
      borderRightWidth={2}
      borderRightColor="gray.200"
    >
      <Button padding={4} rounded="4px" my={2} bg="transparent" w="full">
        <Icon as={HiHeart} color="red.500" mx={2} fontSize="24px" />
        Favorite Posts
      </Button>

      <Flex
        padding={4}
        rounded="4px"
        my={2}
        bg="transparent"
        w="full"
        align="center"
        justify="center"
        fontWeight="bold"
      >
        <Icon as={HiTag} color="yellow.300" mx={2} fontSize="24px" />
        Your interests
      </Flex>

      <SimpleGrid rounded="8px" columns={1} p={2} bg="gray.200" w="80%" ml={6}>
        {[1, 2, 3, 10].map((el) => (
          <Tag key={el} m={2}>
            <TagCloseButton mx={2} />
            <TagLabel>Javasript</TagLabel>
          </Tag>
        ))}

        <Link href="/profile">
          <Button bg="transparent" m={2}>
            And 4 more <Icon name="arrow-forward" mx={2} />
          </Button>
        </Link>
      </SimpleGrid>
    </Flex>
  );
};
