import React, { useState } from "react";
import { validateEmail, validatePassword } from "../../validations";
import styles from "./Form.module.css";

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
    <div className={styles["form-container"]}>
      <form >
        <div>
          <h2 className={styles.formText}>Log in to find more about this page!</h2>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={styles.input}
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
            />
          </label>
          {errors.password && <p className={styles.errorText}>{errors.password}</p>}
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}
