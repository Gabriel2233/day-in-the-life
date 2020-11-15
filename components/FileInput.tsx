import {
  Flex,
  Button,
  Input,
  StatLabel,
  useClipboard,
  Spinner,
} from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { usePost } from "../contexts/PostContext";

export const FileInput = ({ register }: { register: any }) => {
  const { uploadImage, watchedCoverImage, uploadLoading } = usePost();

  const [uploadedImgUrl, setUploadedImgUrl] = useState<string>("");

  const { value, onCopy, hasCopied } = useClipboard(
    `[Alt Test]!(${uploadedImgUrl})`
  );

  const watchedLoading = watchedCoverImage === undefined;

  const uploadNewContentImage = async () => {
    try {
      const res = await uploadImage(watchedCoverImage);

      setUploadedImgUrl(res);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (!watchedLoading && watchedCoverImage.length !== 0) {
      uploadNewContentImage();
    }
  }, [watchedCoverImage]);

  return (
    <Flex w="full">
      <Flex
        align="start"
        justify="center"
        flexDir="column"
        width="full"
        mx={4}
        my={6}
      >
        <StatLabel
          d={"flex"}
          justifyItems={"center"}
          bg="blue.500"
          rounded="4px"
          color="white"
          p={3}
          mr={8}
          fontSize={"md"}
        >
          {uploadLoading ? <Spinner /> : "Upload an Image"}
        </StatLabel>
        <Input
          ref={register}
          name="image"
          cursor={"pointer"}
          opacity={0}
          pos={"absolute"}
          type="file"
          w="175px"
        />

        {uploadLoading !== true && watchedCoverImage !== undefined && (
          <Flex w="full" align="center" justify="start" my={4}>
            <Input value={value} w="60%" isReadOnly={true} />
            <Button onClick={onCopy} mx={4}>
              {hasCopied ? "Copied" : "Copy"}
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
