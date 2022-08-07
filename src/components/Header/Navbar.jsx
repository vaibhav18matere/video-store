import React from "react";
import "./Navbar.css";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <>
      <div className="nav-title">Video Library 📽</div>
      <div className="nav">
        <span className="nav-icon">
          <WhatshotIcon />
        </span>
        <span className="nav-icon">
          <MovieFilterIcon />
        </span>
        <span className="nav-icon">
          <LiveTvIcon />
        </span>
        <span className="nav-icon">
          <SearchIcon />
        </span>
      </div>
    </>
  );
};

export default Header;
