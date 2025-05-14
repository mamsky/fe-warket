import LogoutButton from "../button/button-logout";

const Navbar = () => {
  return (
    <div className="navbar shadow-sm relative top-0">
      <div className="flex-1">
        <h1 className="text-xl font-medium text-base-content">Warunk Ketong</h1>
      </div>
      <div className="flex gap-4 items-center">
        <LogoutButton />
        <button className="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
