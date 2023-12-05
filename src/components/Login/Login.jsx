/** @format */

import React, { useEffect, useState } from "react";
import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { getApiKey } from "../../stores/slices/LoginSlice";
import { fetchTodos } from "../../stores/slices/TodoSlice";
import { loginSelector } from "../../stores/selector";
import Loading from "../Loading/Loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const login = useSelector(loginSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getApiKey(email));
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  return (
    <>
      {login.status === "loading" ? <Loading /> : ""}
      <div className="login-wrapper">
        <h1>Sử Dụng Email để đăng nhập Chê lô nhé</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Nhập vào email!"
            onChange={handleChange}
          />
        </form>
      </div>
    </>
  );
}
