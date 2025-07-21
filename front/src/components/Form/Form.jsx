import React, { useState } from "react";
import { validateEmail, validatePassword } from "../../validations";
import styles from "./Form.module.css";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({ email: "", password: "" });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.pageContainer}>
      <div>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div>
            <h2 className={styles.formText}>
              Log in to find more about this page!
            </h2>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={styles.input}
                autoComplete="off"
                // pressing Enter here will submit the form
              />
            </label>
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
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
                className={styles.input}
                // pressing Enter here will submit the form
              />
            </label>
            {errors.password && (
              <p className={styles.errorText}>{errors.password}</p>
            )}
          </div>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
