import { useState } from "react";
import logo from "../assets/logo.svg";
import grid from "../assets/grid.svg";
import logout from "../assets/logout.svg";
import group from "../assets/group.svg";
import settings from "../assets/settings.svg";
import topic from "../assets/topic.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { SideNavToggle } from "../Redux/ActionSlice";

const SideNav = ({ active }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const openSideNav = useSelector(state=>state.actions.openSideNav);
  
  return (
    <div
      className={`${
        openSideNav ? "w-72" : "w-20"
      } duration-300 bg-[#393939] h-full fixed `}
     
    >
      <img
        src={settings}
        // onClick={() => setOpen(!open)}
        onClick={()=>dispatch(SideNavToggle())}
        className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2`}
        alt=""
      />
      <div className="flex justify-center items-center pt-2">
        <Link className="" to="/">
          <img
            src={logo}
            className={`${openSideNav ? "max-w-[25]" : "max-w-[20]"}`}
            alt=""
          />
        </Link>
      </div>
      <div className="flex justify-center items-center text-white flex-col gap-5 pt-6">
        <Link
          className={`w-full py-3  ${
            openSideNav ? "   px-2" : "flex justify-center items-center"
          } flex items-center gap-3  ${
            active && ":bg-[#a3ff47]"
          } hover:bg-[#a3ff47] hover:border-l-[4px_solid_#4b9302]`}
          to="/dashboard"
        >
          <img
            src={grid}
            className={`${openSideNav ? "max-w-lg" : "max-w-[20]"}`}
            alt=""
          />
          <span className={` text-white ${openSideNav ? "" : "hidden"}`}>
            Dashboard
          </span>
        </Link>
        <Link
          className={`w-full py-3  ${
            openSideNav? "   px-2" : "flex justify-center items-center"
          } flex items-center gap-3  ${
            active && ":bg-[#a3ff47]"
          } hover:bg-[#a3ff47] hover:border-l-[4px_solid_#4b9302]`}
          to="/data-manager"
        >
          <img
            src={topic}
            className={`${openSideNav ? "max-w-lg" : "max-w-[20]"}`}
            alt=""
          />
          <span className={` text-white ${openSideNav ? "" : "hidden"}`}>
            Farm Monitor
          </span>
        </Link>
        <Link
          className={`w-full py-3 ${
            openSideNav? "px-2" : "flex justify-center items-center"
          } flex items-center gap-3  ${
            active && ":bg-[#a3ff47]"
          } hover:bg-[#a3ff47] hover:border-l-[4px_solid_#4b9302]`}
          to="/"
        >
          <img
            src={group}
            className={`${openSideNav ? "max-w-lg" : "max-w-[20]"}`}
            alt=""
          />
          <span className={` text-white ${openSideNav ? "" : "hidden"}`}>Data Manager</span>
        </Link>
        <Link
          to="/profile"
          className={`w-full py-3 ${
            openSideNav ? "   px-2" : "flex justify-center items-center"
          } flex items-center gap-3  ${
            active && ":bg-[#a3ff47]"
          } hover:bg-[#a3ff47] hover:border-l-[4px_solid_#4b9302]`}
          
        >
          <img
            src={settings}
            className={`${openSideNav? "max-w-lg" : "max-w-[20]"}`}
            alt=""
          />
          <span className={`text-white ${openSideNav ? "" : "hidden"}`}>Settings</span>
        </Link>
        <br />
        <Link
          className={`w-full py-3 ${
            openSideNav ? "   px-2" : "flex justify-center items-center"
          } flex items-center gap-3  ${
            active && ":bg-[#a3ff47]"
          } hover:bg-[#a3ff47] hover:border-l-[4px_solid_#4b9302]`}
          to="/"
        >
          <img
            src={logout}
            className={`${openSideNav ? "max-w-lg" : "max-w-[20]"}`}
            alt=""
          />
          <span className={`${openSideNav ? "" : "hidden"} text-white`}>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;