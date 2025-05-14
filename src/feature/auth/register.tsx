import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen w-full">
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
              type="text"
              placeholder="Full Name..."
              className="p-2 rounded-md border"
            />
          </div>
          {/* username  */}
          <div className="flex flex-col my-4">
            <label htmlFor="username" className="text-xl">
              Username:
            </label>
            <input
              id="username"
              type="text"
              placeholder="username..."
              className="p-2 rounded-md border"
            />
          </div>
          {/* email  */}
          <div className="flex flex-col my-4">
            <label htmlFor="email" className="text-xl">
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email..."
              className="p-2 rounded-md border"
            />
          </div>
          {/* password  */}
          <div className="flex flex-col my-4">
            <label htmlFor="password" className="text-xl">
              password:
            </label>
            <input
              id="password"
              type="password"
              placeholder="password..."
              className="p-2 rounded-md border"
            />
          </div>

          <div className="">
            <button className="btn w-full text-xl font-bold rounded-md">
              Register
            </button>
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
