import React from "react";
import KeyField from "./KayField";
import PasswordField from "./passwordField";
import NameField from "./NameField";
const ConditionalField = (props) => {
  const isAdmin = props.isAdmin;
  const renderField = props.renderField;
  if (isAdmin === 1) return <KeyField />;
  else if (isAdmin === 0) return <PasswordField />;
  else return <NameField />;
};

export default ConditionalField;
