import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography } from "@mui/material";
import CustomButton from "../../shared/components/button/CustomeButton";
import "./Login.styles.css";

const InputField = ({ label, type = "text", value, onChange }) => (
  <TextField
    label={label}
    type={type}
    variant="outlined"
    fullWidth
    className="input-field"
    value={value}
    onChange={onChange}
  />
);

const LoginPage = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleLogin = () => {
    if (form.username.trim() && form.password.trim()) {
      dispatch(login({ username: form.username }));
      navigate("/home");
    } else {
      alert("Enter valid credentials");
    }
  };

  return (
    <Box className="login-container">
      <Typography variant="h2" className="login-title">
        Login
      </Typography>

      <Box className="login-box">
        <InputField
          label="Username"
          value={form.username}
          onChange={handleChange("username")}
        />
        <InputField
          label="Password"
          type="password"
          value={form.password}
          onChange={handleChange("password")}
        />
      </Box>

      <CustomButton
        label="Login"
        onClick={handleLogin}
        className="login-button"
      />
    </Box>
  );
};

export default LoginPage;
