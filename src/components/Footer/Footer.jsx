import React from "react";
import "./Footer.css";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import SearchIcon from "@mui/icons-material/Search";

const Footer = () => {
  return (
    <>
      <div className="footer">
          <WhatshotIcon />
          <MovieFilterIcon />
          <LiveTvIcon />
          <SearchIcon />
      </div>
    </>
  );
};

export default Footer;