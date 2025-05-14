import { Link } from "react-router-dom";
import { useLoginForm } from "./hook/useLoginForm";
import type { LoginSchemaDTO } from "../../utils/schemas/auth.schemas";
import { useLogin } from "./hook/useLogin";

export const Login = () => {
  const { register, handleSubmit, errors } = useLoginForm();
  const { mutateAsync, isPending } = useLogin();
  const onSubmit = async (data: LoginSchemaDTO) => {
    await mutateAsync(data);
  };

  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="flex justify-center items-center h-full">
        <div className="border p-4 w-full mx-4 md:w-md rounded-lg">
          <h1 className="text-4xl font-bold text-center my-2">Login Page</h1>
          <div className="flex flex-col my-4">
            <label htmlFor="username" className="text-xl">
              username:
            </label>
            <input
              id="username"
              {...register("username")}
              type="text"
              placeholder="username..."
              className="p-2 rounded-md border"
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="password" className="text-xl">
              password:
            </label>
            <input
              id="password"
              {...register("password")}
              type="password"
              placeholder="password..."
              className="p-2 rounded-md border"
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="">
            <button
              onClick={handleSubmit(onSubmit)}
              disabled={isPending ? true : false}
              className="btn w-full text-xl font-bold rounded-md"
            >
              Login
            </button>
            <p>
              you don't have account yet?
              <Link to={"/register"} className="text-blue-500">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
