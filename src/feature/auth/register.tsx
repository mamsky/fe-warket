import { useRef } from "react";
import { Link } from "react-router-dom";
import type { CreateUserSchemaDTO } from "../../utils/schemas/auth.schemas";
import { useRegister } from "./hook/useRegister";
import { useRegisterForm } from "./hook/useRegisterForm";

const Register = () => {
  const { errors, handleSubmit, register, reset, watch } = useRegisterForm();
  const buttonClose = useRef<HTMLLabelElement>(null);
  const { mutateAsync, isPending } = useRegister();
  const onSubmit = async (data: CreateUserSchemaDTO) => {
    const mutate = await mutateAsync(data);
    if (mutate.message == "success" && buttonClose.current) {
      reset();
      buttonClose.current.click();
    }
  };

  return (
    <div className="h-screen w-full overflow-y-hidden">
      <div className="flex justify-center items-center h-full">
        <div className="border p-4 w-full mx-4 md:w-md rounded-lg">
          <h1 className="text-4xl font-bold text-center my-2">Register Page</h1>
          {/* name  */}
          <div className="flex flex-col my-4">
            <label htmlFor="name" className="text-xl">
              Name:
            </label>
            <input
              id="name"
              {...register("name")}
              type="text"
              placeholder="Full Name..."
              className="p-2 rounded-md border"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name?.message}</p>
            )}
          </div>
          {/* username  */}
          <div className="flex flex-col my-4">
            <label htmlFor="username" className="text-xl">
              Username:
            </label>
            <input
              id="username"
              type="text"
              {...register("username")}
              placeholder="username..."
              className="p-2 rounded-md border"
            />
            {errors.username && (
              <p className="text-red-500">{errors.username?.message}</p>
            )}
          </div>
          {/* email  */}
          <div className="flex flex-col my-4">
            <label htmlFor="email" className="text-xl">
              Email:
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="Email..."
              className="p-2 rounded-md border"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>
          {/* password  */}
          <div className="flex flex-col my-4">
            <label htmlFor="password" className="text-xl">
              password:
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              placeholder="password..."
              className="p-2 rounded-md border"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>

          <div className="">
            <label
              htmlFor="my_modal_6"
              className="btn w-full text-xl font-bold"
            >
              Register
            </label>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <h3 className="text-lg font-bold">Data Register</h3>
                <ul className="grid gap-y-1">
                  <li className="grid grid-cols-[100px_1fr]">
                    <span>Name</span>
                    <span>: {watch("name")}</span>
                  </li>
                  <li className="grid grid-cols-[100px_1fr]">
                    <span>Username</span>
                    <span>: {watch("username")}</span>
                  </li>
                  <li className="grid grid-cols-[100px_1fr]">
                    <span>Email</span>
                    <span>: {watch("email")}</span>
                  </li>
                </ul>
                <div className="modal-action">
                  <label htmlFor="my_modal_6" className="btn" ref={buttonClose}>
                    Close!
                  </label>
                  <button
                    onClick={handleSubmit(onSubmit)}
                    disabled={isPending ? true : false}
                    className="btn text-xl font-bold rounded-md"
                  >
                    {isPending ? "Loading..." : "Register"}
                  </button>
                </div>
              </div>
            </div>

            <p>
              you have account?{" "}
              <Link to={"/login"} className="text-blue-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
