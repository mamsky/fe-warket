import { useMutation } from "@tanstack/react-query";
import axios, { isAxiosError } from "axios";
import toast from "react-hot-toast";
import type { CreateUserSchemaDTO } from "../../../utils/schemas/auth.schemas";

export const useRegister = () => {
  const url = import.meta.env.VITE_API_URL;
  const { mutateAsync, isPending } = useMutation<
    { message: string },
    Error,
    CreateUserSchemaDTO
  >({
    mutationKey: ["register"],
    mutationFn: async (data: CreateUserSchemaDTO) => {
      const response = await axios.post(`${url}/auth/register`, data);
      return response.data;
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
    onSuccess: (res) => {
      toast.success(res.message);
    },
  });
  return { mutateAsync, isPending };
};
