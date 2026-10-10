import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSignUp = (e) => {
    e.preventDefault();

    const newError = {};

    if(!name.trim()){
        newError.name = "Name is required!";
    }

    if(!email.trim()){
        newError.email = "Enter a valid email address!";
    }

    if(password.length < 6){
      newError.password = "Password must be at least 6 character!";
    }

    setErrors(newError);

    if(Object.keys(newError).length > 0) return;

    console.log("Submitted", {
      name,
      email,
      password,
    });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSignUp(e)}>
        <label>
          Name:
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
          />
          {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
        </label>
        <br />

        <label>
          Email:
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
          />
          {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
        </label>
        <br />

        <label>
          Password:
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Your Password"
          />
          {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
        </label>
        <br />

        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
