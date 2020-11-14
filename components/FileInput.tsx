import { Flex, Input, StatLabel } from "@chakra-ui/core";
import { useEffect, useState } from "react";
import { usePost } from "../contexts/PostContext";

export const FileInput = ({ register }: { register: any }) => {
  const { uploadImage, watchedImage } = usePost();

  const [uploadedImgUrl, setUploadedImgUrl] = useState<string>("");

  const uploadNewContentImage = async () => {
    try {
      const res = await uploadImage(watchedImage);

      setUploadedImgUrl(res);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    if (watchedImage !== undefined) {
      uploadNewContentImage();
    }
  }, [watchedImage]);

  return (
    <Flex>
      <Flex
        align="center"
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
          Upload an Image
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

        {watchedImage !== undefined && <Input value={uploadedImgUrl} />}
      </Flex>
    </Flex>
  );
};
