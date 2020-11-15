import { Flex, Heading, Image, Tag, TagLabel } from "@chakra-ui/core";
import { usePost } from "../contexts/PostContext";

import marked from "marked";
import DOMPurify from "dompurify";
import { dir } from "console";

export const PreviewPost = () => {
  const { fullPostData, coverImgUrl } = usePost();

  const postTags = fullPostData.tags.split(",");

  const dirty = marked(fullPostData.content);

  const clean = DOMPurify.sanitize(dirty);

  return (
    <Flex
      w="70%"
      align="flex-start"
      justify="center"
      flexDir="column"
      background="white"
      borderWidth={2}
      borderColor="gray.500"
      borderRadius="8px"
      p={8}
    >
      {coverImgUrl !== "" && (
        <Image src={coverImgUrl} alt="cover" w="full" h="250px" rounded="4px" />
      )}

      <Flex w="full" align="center" justify="start" flexDir="column" my={6}>
        <Heading size="xl" textAlign="start" w="full">
          {fullPostData.title}
        </Heading>

        <Flex w="full" align="center" justify="start" my={6}>
          {postTags.map((tag) => (
            <Tag key={tag} mr={4}>
              <TagLabel>{tag}</TagLabel>
            </Tag>
          ))}
        </Flex>

        <Flex w="full" align="center" justify="start">
          <div dangerouslySetInnerHTML={{ __html: clean }} />
        </Flex>
      </Flex>
    </Flex>
  );
};
