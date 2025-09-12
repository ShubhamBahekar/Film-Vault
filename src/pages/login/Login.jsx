import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Box, TextField,Typography } from "@mui/material";
import CustomButton from "../../shared/components/button/CustomeButton";

const InputField = ({ label, type = "text", value, onChange }) => (
  <TextField
    label={label}
    type={type}
    variant="outlined"
    fullWidth
    sx={{ mb: 2, bgcolor: "white", borderRadius: "0.5rem" }}
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
      navigate("/");
    } else {
      alert("Enter valid credentials");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#3D3539"
      flexDirection="column"
    >
      <Typography variant="h4" color="white" mb={3}>
        Login
      </Typography>

      <Box width="20rem">
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
        sx={{ borderRadius: "0.5rem", px: 4 }}
      />
    </Box>
  );
};

export default LoginPage;
