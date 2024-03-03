import logo from "../../assets/img/logo.svg";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import style from "./Navbar.module.css";
//import "../../css/websit.css";

const pages = ["About", "Mechanic", "Contact"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const auth = localStorage.getItem("token");
  const loginPage = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const authToken = localStorage.getItem("token");

  let userName = "";
  const headers = {
    accept: "application/json",
    authorization: authToken,
  };

  axios
    .get(
      "https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/auth/user-login",
      { headers }
    )
    .then((response) => {
      console.log(response.data);
      userName = response.data.userName;
      document.getElementById("userName").textContent = userName;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  axios
    .get(
      "https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/auth/mechanic-login",
      { headers }
    )
    .then((response) => {
      console.log(response.data);
      userName = response.data.name;
      document.getElementById("userName").textContent = userName;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    loginPage("/Login");
  };
  return (
    <AppBar className={`${style.navbar} website_header`} position="static">
      <Container sx={{ paddingTop: "1rem" }} maxWidth="lg">
        <>
          {auth ? (
            <Toolbar disableGutters>
              <Typography
                variant="h3"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 600,
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <Link style={{ textDecoration: "none" }} to={"/"}>
                  <div className={style.line}>
                    <img className={style.img} src={logo} alt="logo" />
                    <h6>Vehicle Service</h6>
                  </div>
                </Link>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  className="icon"
                >
                  <MenuIcon sx={{ color: "var(--orange)", fontSize: "3rem" }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/${page}`}
                        >
                          {page}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 600,
                  letterSpacing: ".3rem",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <div className={style.line}>
                  <img className={style.img} src={logo} alt="logo" />
                  <h6>Vehicle Service</h6>
                </div>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    id={`${page}`}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    <Link
                      className="page_link"
                      style={{ textDecoration: "none" }}
                      to={`/${page}`}
                    >
                      {page}
                    </Link>
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                <Link to={"Login"}>
                  <button
                    onClick={() => handleLogout()}
                    style={{ marginRight: "2rem" }}
                    className="btn btn-orange"
                  >
                    Logout
                  </button>
                </Link>
                <span
                  style={{ marginBottom: "0px", color: "var(--orange)" }}
                  id="userName"
                ></span>
              </Box>
            </Toolbar>
          ) : (
            <Toolbar disableGutters>
              <Typography
                variant="h3"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 600,
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <Link style={{ textDecoration: "none" }} to={"/"}>
                  <div className={style.line}>
                    <img className={style.img} src={logo} alt="logo" />
                    <h6>Vehicle Service</h6>
                  </div>
                </Link>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  className="icon"
                >
                  <MenuIcon sx={{ color: "var(--orange)", fontSize: "3rem" }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "var(--orange)",
                          }}
                          to={`/${page}`}
                        >
                          {page}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 600,
                  letterSpacing: ".3rem",
                  color: "black",
                  textDecoration: "none",
                }}
              >
                <div className={style.line}>
                  <img className={style.img} src={logo} alt="logo" />
                  <h6>Vehicle Service</h6>
                </div>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    id={`${page}`}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    <Link
                      className="page_link"
                      style={{ textDecoration: "none", color: "var(--orange)" }}
                      to={`/${page}`}
                    >
                      {page}
                    </Link>
                  </Button>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
                <Link to={"Login"}>
                  <button
                    style={{ marginRight: "2rem" }}
                    className="btn btn-orange"
                  >
                    login
                  </button>
                </Link>
                <Link to={"Signup"}>
                  <button className="btn btn-orange">Sign Up</button>
                </Link>
              </Box>
            </Toolbar>
          )}
        </>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
