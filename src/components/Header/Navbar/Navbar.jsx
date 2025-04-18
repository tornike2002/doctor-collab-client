import { useNavigate } from "react-router-dom";
import DoctorLogo from "/imgs/logo12.jpg";
import NavbarText from "./NavbarText";
export default function Navbar({ links }) {
  const navigate = useNavigate();
  return (
    <div className="flex  items-center  justify-between p-5">
      <img
        src={DoctorLogo}
        className="w-16 h-16 rounded-full cursor-pointer"
        alt="Doctor Logo"
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
      <NavbarText links={links} />
    </div>
  );
}
