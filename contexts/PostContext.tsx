import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useForm, FieldErrors, Ref } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormValues = {
  title: string;
  tags: string;
  content: string;
};

type IPostContext = {
  selectedFileUrl: string;
  onDrop(acceptedFiles: File[]): Promise<void>;
  removeImage(): void;
  uploadImage(acceptedFiles: File[]): Promise<void>;
  createPost(data: FormValues): Promise<void>;
  errors: FieldErrors;
  handleSubmit(fn: (data: FormValues) => Promise<void>): any;
  register: any;
};

const validationSchema = yup.object().shape({
  title: yup.string().required().min(8).max(33),
  tags: yup.string().required(),
  content: yup.string().required(),
});

const PostContext = createContext<IPostContext>({
  selectedFileUrl: "",
  onDrop: async () => {},
  removeImage: () => {},
  uploadImage: async () => {},
  createPost: async () => {},
  errors: {},
  handleSubmit: () => {},
  register: null,
});

export const PostContextProvider = ({ children }: { children: ReactNode }) => {
  const post: IPostContext = useProvidePost();

  return <PostContext.Provider value={post}>{children}</PostContext.Provider>;
};

const useProvidePost = () => {
  const [selectedFileUrl, setSelectedFileUrl] = useState<string>("");

  const { errors, handleSubmit, register, watch } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const watchedImage = watch("image");

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    const url = URL.createObjectURL(file);

    setSelectedFileUrl(url);
  }, []);

  const removeImage = () => setSelectedFileUrl("");

  const createPost = async (data: FormValues) => {
    console.log(data, selectedFileUrl);
  };

  const uploadImage = async (acceptedFiles: File[]) => {
    try {
      const file = acceptedFiles[0];

      const res = await fetch("/api/upload-image", {
        method: "POST",
        body: JSON.stringify(file),
      });

      const data = await res.json();

      console.log(data);
    } catch (err) {
      alert(err.message);
    }
  };

  return {
    selectedFileUrl,
    uploadImage,
    onDrop,
    removeImage,
    createPost,
    errors,
    handleSubmit,
    register,
  };
};

export const usePost = () => {
  return useContext(PostContext);
};
