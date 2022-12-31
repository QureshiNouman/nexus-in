import React, { Component } from "react";
import ConditionalField from "./ConditionalField";
import { useState, useEffect } from "react";
import KeyField from "./KayField";
import PasswordField from "./passwordField";
const NameField = () => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  const [adminState, setAdminState] = useState(-1);
  const [emailError, setEmailError] = useState("");
  const [adminKey, setAdminKey] = useState({
    to: "",
    subject: "",
    description: "",
  });
  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    console.log(email);
  };
  function setLoginUser(u) {
    if (u.hasOwnProperty("message")) setEmailError(u.message);
    else {
      setEmailError("");
      setUser(u);
    }
  }
  function generateKey() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
  }
  const handleButton = async () => {
    console.log(email);
    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await res.json();
    setLoginUser(data);
    if (data.isAdmin == false) {
      setAdminState(0);
    } else if (data.isAdmin == true) {
      const key = generateKey();
      const resp = await fetch("http://localhost:3001/sendKey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: data.email,
          subject: "Admin Key",
          description: key,
        }),
      });
      const Keydata = await resp.json();
      console.log(Keydata);
      setAdminState(1);
    }
  };
  if (adminState == -1) {
    return (
      <div>
        <div class="form-group">
          <label for="your_name">
            <i class="zmdi zmdi-account material-icons-name"></i>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <p>{emailError}</p>
        <div class="form-group">
          <input
            type="checkbox"
            name="remember-me"
            id="remember-me"
            class="agree-term"
          />
          <label for="remember-me" class="label-agree-term">
            <span>
              <span></span>
            </span>
            Remember me
          </label>
        </div>
        <div class="form-group form-button">
          <input
            onClick={handleButton}
            name="signin"
            id="signin"
            class="form-submit"
            value="Continue"
          />
        </div>
      </div>
    );
  } else if (adminState == 1) return <KeyField />;
  else if (adminState == 0) return <PasswordField user={user} />;
};
// class NameField extends Component {
//   state = {
//     isAdmin: -1,
//   };
//   handleButton = () => {
//     let result = this.state.isAdmin == -1 ? 0 : 1;
//     this.setState({ isAdmin: result });
//     console.log(this.state.isAdmin);
//   };
//   render() {
//     if (this.state.isAdmin == -1) {
//       return (
//         <div>
//           <div class="form-group">
//             <label for="your_name">
//               <i class="zmdi zmdi-account material-icons-name"></i>
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Your Email"
//             />
//           </div>
//           <div class="form-group">
//             <input
//               type="checkbox"
//               name="remember-me"
//               id="remember-me"
//               class="agree-term"
//             />
//             <label for="remember-me" class="label-agree-term">
//               <span>
//                 <span></span>
//               </span>
//               Remember me
//             </label>
//           </div>
//           <div class="form-group form-button">
//             <input
//               onClick={this.handleButton}
//               name="signin"
//               id="signin"
//               class="form-submit"
//               value="Continue"
//             />
//           </div>
//         </div>
//       );
//     } else if (this.state.isAdmin == 0) return <KeyField />;
//     else return <PasswordField />;
//   }
// }

export default NameField;
