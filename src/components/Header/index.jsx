import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  FormControl,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./style.css";

function Header({ path, handlePath }) {
  const navigate = useNavigate();
  const [creator, setCreator] = useState("");
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = (val) => () => {
    setOpenMenu(val);
  };

  const handleLogoClick = () => {
    handlePath("/");
    navigate("/");
  };

  const handleSignIn = () => {
    handlePath("/admin");
    navigate("/admin");
  };

  const home = (
    <a
      href={path === "/admin" ? "" : "#home"}
      className={
        path === "/admin" ? "header_item disabled_link" : "header_item"
      }
    >
      Home
    </a>
  );

  const features = (
    <a
      href={path === "/admin" ? "" : "#features"}
      className={
        path === "/admin" ? "header_item disabled_link" : "header_item"
      }
    >
      Features
    </a>
  );

  const creators = (
    <a
      href={path === "/admin" ? "" : "#creators"}
      className={
        path === "/admin" ? "header_item disabled_link" : "header_item"
      }
    >
      Explore creators
    </a>
  );

  const footer = (
    <a
      href={path === "/admin" ? "" : "#footer"}
      className={
        path === "/admin" ? "header_item disabled_link" : "header_item"
      }
    >
      FAQ
    </a>
  );

  const search_bar = (
    <FormControl variant="outlined">
      <OutlinedInput
        value={creator}
        onChange={(e) => setCreator(e.target.value)}
        placeholder="Search creators"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        }
        className="search_input"
      />
    </FormControl>
  );

  const MenuList = (
    <div className="menu_list_container">
      <div className="close_icon">
        <CloseIcon onClick={handleMenu(false)} />
      </div>
      <div onClick={handleMenu(false)}>{home}</div>
      <div onClick={handleMenu(false)}>{features}</div>
      <div onClick={handleMenu(false)}>{creators}</div>
      <div onClick={handleMenu(false)}>{footer}</div>
    </div>
  );

  return (
    <div className="header_container sticky">
      <div className="header_content">
        <div className="logo" onClick={handleLogoClick}>
          <div className="menu_icon">
            <MenuIcon onClick={handleMenu(true)} />
            <Drawer open={openMenu} onClose={handleMenu(false)}>
              {MenuList}
            </Drawer>
          </div>
          <div className="black_circle"></div>
          <div className="purple_circle"></div>
        </div>
        <div className="horizontal_item">{home}</div>
        <div className="horizontal_item">{features}</div>
        <div className="horizontal_item">{creators}</div>
        <div className="horizontal_item">{footer}</div>
      </div>
      {path === "/admin" ? (
        <div className="second_header_content">
          <div className="header_text">Admin</div>
          <div>
            <img
              className="profile_picture"
              src="https://xsgames.co/randomusers/avatar.php?g=female"
              alt="pic"
            />
          </div>
        </div>
      ) : (
        <div className="second_header_content">
          <div className="search_container">{search_bar}</div>

          <div className="header_text" onClick={() => handleSignIn()}>
            Sign in
          </div>
          <div className="sign_up">
            <div>Sign up</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
