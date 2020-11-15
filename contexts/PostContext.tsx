import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { useForm, FieldErrors } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import firebase from "../lib/firebase";
import "firebase/storage";

type IFullPostData = {
  title: string;
  tags: string;
  content: string;
};

type FormValues = {
  title: string;
  tags: string;
  content: string;
};

type IPostContext = {
  coverImgUrl: string;
  onDrop(files: File[]): Promise<void>;
  togglePreview(): any;
  removeImage(): void;
  uploadImage(acceptedFiles: File[]): Promise<string>;
  createPost(data: FormValues): Promise<void>;
  errors: FieldErrors;
  handleSubmit(fn: (data: FormValues) => Promise<void>): any;
  register: any;
  watchedCoverImage: File[] | undefined;
  uploadLoading: boolean;
  fullPostData: IFullPostData;
  isPreviewing: boolean;
};

const validationSchema = yup.object().shape({
  title: yup.string().required().min(4).max(33),
  tags: yup.string().required(),
  content: yup.string().required(),
});

const PostContext = createContext<IPostContext>({} as IPostContext);

export const PostContextProvider = ({ children }: { children: ReactNode }) => {
  const post: IPostContext = useProvidePost();

  return <PostContext.Provider value={post}>{children}</PostContext.Provider>;
};

const useProvidePost = () => {
  const [coverImgUrl, setCoverImgUrl] = useState<string>("");
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);

  const [isPreviewing, setIsPreviewing] = useState<boolean>(false);
  const [fullPostData, setFullPostData] = useState(undefined);

  const { errors, handleSubmit, register, watch } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const watchedCoverImage = watch("image");

  const onDrop = useCallback(async (files: File[]) => {
    if (files) {
      const file = files[0];

      const url = URL.createObjectURL(file);

      setCoverImgUrl(url);
    }
  }, []);

  const togglePreview = () => {
    if (isPreviewing) {
      setIsPreviewing(false);
    } else {
      setIsPreviewing(true);
      setFullPostData({
        ...watch(["title", "tags", "content"]),
      });
    }
  };

  const removeImage = () => setCoverImgUrl("");

  const createPost = async (data: FormValues) => {
    console.log(data, coverImgUrl);
  };

  const uploadImage = async (acceptedFiles: File[]) => {
    const storageRef = firebase.storage().ref();
    const fieldRef = storageRef.child(acceptedFiles[0].name);

    try {
      setUploadLoading(true);
      const res = await fieldRef.put(acceptedFiles[0]);
      const storagedUrl = await res.ref.getDownloadURL();

      if (res.state === "success") {
        setUploadLoading(false);
        return storagedUrl;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    coverImgUrl,
    uploadImage,
    onDrop,
    togglePreview,
    removeImage,
    createPost,
    errors,
    handleSubmit,
    register,
    watchedCoverImage,
    uploadLoading,
    fullPostData,
    isPreviewing,
  };
};

export const usePost = () => {
  return useContext(PostContext);
};
