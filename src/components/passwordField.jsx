import React from "react";
import { useState, useEffect } from "react";
const PasswordField = ({ data }) => {
  console.log(data);
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    console.log(password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (password == props.user.password) console.log("Home Page");
    // else console.log("Wrong Password");
  };
  return (
    <div>
      <form
        method="POST"
        class="register-form"
        id="login-form"
        onSubmit={handleSubmit}
      >
        <div class="form-group">
          <label for="your_pas">
            <i class="zmdi zmdi-lock"></i>
          </label>
          <input
            type="password"
            name="your_pass"
            id="your_pass"
            placeholder="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div class="form-group form-button">
          <input
            type="submit"
            name="signin"
            id="signin"
            class="form-submit"
            value="Log in"
          />
        </div>
      </form>
    </div>
  );
};

export default PasswordField;
