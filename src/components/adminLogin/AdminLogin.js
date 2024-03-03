import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import logo from "../../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
import AuthContext from "../../context/auth/context";

const LoginForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  position: "relative",
  maxWidth: "500px",
  margin: "0 auto",
  padding: "3rem 0rem",
});

const LoginCard = styled(Card)({
  width: "400px",
  margin: "0 auto",
});

const LogoImage = styled("img")({
  width: "50px",
  display: "block",
  margin: "0 auto 20px",
});

const EyeButton = styled(Button)({
  position: "absolute",
  right: "10px",
  top: "50%",
  transform: "translateY(-50%)",
});

const CustomTypography = styled(Typography)({
  marginTop: "15px",
});

export default function AdminLogin() {
  const { isAdminChangeHandler } = useContext(AuthContext);
  const homeNavigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };
  //const [isAdmin, setIsAdmin] = useState(true);

  const userHandleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/auth/adminlogin",
        {
          email: useremail,
          password: userpassword,
        }
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);

      //const { token, isAdmin } = response.data;
      console.log(response.data.token);

      homeNavigate("/admin/mechanic-requests");
      isAdminChangeHandler();
    } catch (error) {
      // Handle error
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <LoginCard>
        <CardContent>
          <LogoImage src={logo} alt="Logo" />
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>

          <LoginForm onSubmit={userHandleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              autoFocus
              value={useremail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <div style={{ position: "relative" }}>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                value={userpassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
              <EyeButton onClick={handlePasswordVisibilityToggle} size="small">
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </EyeButton>
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
              }
              label="Remember me"
            />
            <Button
              sx={{ backgroundColor: "var(--orange)" }}
              type="submit"
              className="btn btn-orange"
              variant="contained"
              fullWidth
            >
              Log in
            </Button>
          </LoginForm>

          <CustomTypography align="center" variant="body2">
            Don't have an account? <Link to={"/Signup"}>Register</Link>
          </CustomTypography>
        </CardContent>
      </LoginCard>
    </Box>
  );
}
