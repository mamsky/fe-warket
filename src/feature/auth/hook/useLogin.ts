import { useMutation } from "@tanstack/react-query";
import type { LoginSchemaDTO } from "../../../utils/schemas/auth.schemas";
import axios, { isAxiosError } from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { mutateAsync, isPending } = useMutation<
    { message: string; token: string },
    Error,
    LoginSchemaDTO
  >({
    mutationKey: ["login"],
    mutationFn: async (data: LoginSchemaDTO) => {
      const response = await axios.post(`${url}/auth/login`, data);
      console.log("rd", response.data);

      return response.data;
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        toast.error(err.response?.data.message);
      }
    },
    onSuccess: async (res) => {
      toast.success(res.message);
      Cookies.set("token", res.token);
      navigate("/");
    },
  });
  return { mutateAsync, isPending };
};
