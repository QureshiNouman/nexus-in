import React from "react";
const PasswordField = () => {
  return (
    <div>
      <div class="form-group">
        <label for="your_pas">
          <i class="zmdi zmdi-lock"></i>
        </label>
        <input
          type="password"
          name="your_pass"
          id="your_pass"
          placeholder="password"
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
    </div>
  );
};

export default PasswordField;
