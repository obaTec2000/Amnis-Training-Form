import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">First name</label>
        <input value={name} name="name" id="name" placeholder="Olaniyan" />
        <label htmlFor="name">Middle name</label>
        <input value={name} name="name" id="name" placeholder="Feranmi" />
        <label htmlFor="name">Last name</label>
        <input value={name} name="name" id="name" placeholder="John" />
        <label htmlFor="contact">Phone Number</label>
        <input value={name} name="name" id="name" placeholder="09160214824" />
        <label htmlFor="gender">Gender</label>
        <input value={name} name="name" id="name" placeholder="Male/Female" />
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="obanijesujohn45@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
        <label htmlFor="gender">Do you any have Tec Experience Before</label>
        <select>
          <option>Yes</option>
        </select>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
