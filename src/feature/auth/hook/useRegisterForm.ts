import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateUserSchemas,
  type CreateUserSchemaDTO,
} from "../../../utils/schemas/auth.schemas";

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<CreateUserSchemaDTO>({
    mode: "onChange",
    resolver: zodResolver(CreateUserSchemas),
  });

  return { register, handleSubmit, errors, reset, watch };
};
