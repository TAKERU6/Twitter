import React from "react";

const Button = ({ like, retweet, onClick, buttonName }) => {
  return (
    <>
      <button onClick={onClick}>{buttonName}</button>
      <> {like} </>
      <> {retweet} </>
    </>
  );
};

export default Button;
