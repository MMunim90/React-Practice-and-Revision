import React from "react";
import UnauthorizedCard from "./UnauthorizedCard";

const Greetings = (props) => {
  // console.log(props);
  const {
    greet = "Good to see you!!!",
    name = "developer",
    greetEmoji = "✊",
    isLoggedIn = false,
    securityCode
  } = props;

  const currentYear = new Date().getFullYear();

  if (!isLoggedIn) {
    return <UnauthorizedCard name={name}/>;
  }

  return (
    <div className="greetings-card">
      <h1>{greet}</h1>
      <h1 className="demo">{greetEmoji}</h1>
      <h2>hello, {name}!!!</h2>
      <p>{securityCode && securityCode}</p>
      {/* <img src="" alt="" /> */}
      <p>I have {200 + 300} taka</p>
      <p>current year is {currentYear}</p>
    </div>
  );
};

export default Greetings;
