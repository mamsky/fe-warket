import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("token");
    toast.success("Logout Success");
    navigate("/login");
  };
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my_modal_6" className="btn">
        Logout
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Logout?</h3>
          <p className="py-4">do you want to exit this page?</p>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Cancel
            </label>
            <button className="btn" onClick={handleLogout}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutButton;
