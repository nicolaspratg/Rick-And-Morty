import React, { useState } from "react";
import { validateEmail, validatePassword } from "../../validations";

export default function Form() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    if (name === "email") {
      const error = validateEmail(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    } else if (name === "password") {
      const error = validatePassword(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </label>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
