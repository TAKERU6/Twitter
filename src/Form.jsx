import React from "react";

const Form = ({ value, onChange, onSubmit, submitButtonName }) => {
  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" value={value} onChange={onChange}></input>
        <input type="submit" value={submitButtonName}></input>
      </form>
    </>
  );
};

export default Form;
