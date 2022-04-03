import "./App.css";
import Select from "react-select";
import React, { useState } from "react";
import { contacts } from "./contacts";

const autoCompleteOptions = contacts;

function App() {
  const [selectValue, setSelectValue] = useState("");

  const customSelectStyles = {
    menu: (provided, state) => ({
      ...provided,
      color: state.selectProps.menuColor,
      width: 600,
    }),
    option: (provided, state) => ({
      ...provided,
      padding: "7px 15px",
      borderBottom: "1px dotted #eee",
      color: state.isselectInput ? "#000" : "#000",
      backgroundColor: state.isselectInput ? "#eee" : "#fff",
    }),
    control: (control) => ({
      ...control,
      height: 28,
      color: "#fff",
      borderRadius: 20,
      minHeight: "initial",
      width: 600,
    }),
    placeholder: (placeholder) => ({
      ...placeholder,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }),
    indicatorsContainer: (indicatorsContainer) => ({
      ...indicatorsContainer,
      height: 28,
    }),
  };

  const onCustomerSearchChange = async (emailToFind) => {
    console.log(emailToFind);
    console.log(autoCompleteOptions);
    setSelectValue(
      autoCompleteOptions.find(({ email }) => email === emailToFind)
    );
  };

  return (
    <li title={selectValue ? selectValue.email : "email..."}>
      <Select 
        value={selectValue}
        styles={customSelectStyles}
        options={autoCompleteOptions}
        onChange={({ email }) => onCustomerSearchChange(email)}
        placeholder="email..."
      />
    </li>
  );
}

export default App;
