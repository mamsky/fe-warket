import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  LoginUsersSchemas,
  type LoginSchemaDTO,
} from "../../../utils/schemas/auth.schemas";

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<LoginSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(LoginUsersSchemas),
  });

  return { register, handleSubmit, errors, reset, watch };
};
