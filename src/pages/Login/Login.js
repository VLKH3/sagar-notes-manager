import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../shared/data";
import { TextField, Button, Rating } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [passwordType, setPasswordType] = useState("password");

  const { setUsernameGlobal } = useContext(UserDataContext);

  const navigate = useNavigate();

  function loginClick(formObj) {
    if (formObj.username == "vern" && formObj.password == "123") {
      setUsernameGlobal("vern");
      navigate("/home");
    } else {
      setUsernameGlobal("");
    }
  }

  function clearUsername() {
    if (passwordType == "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  function apply() {
    setValue2(value);
  }

  return (
    <div>
      <div className="login-form">
        <form onSubmit={handleSubmit(loginClick)}> 
          <button onClick={clearUsername}>Show/Hide Password</button>
          <TextField
          {...register('username')}
            id="outlined-basic"
            label={"Username"}
            type={"text"}
          ></TextField>
          <TextField
          {...register('password')}
            id="outlined-basic"
            label={"Password"}
            type={passwordType}
          ></TextField>
          <Button variant="contained" onClick={loginClick}>
            Login
          </Button>
          <Rating value={3} />
        </form>
      </div>
    </div>
  );
}
