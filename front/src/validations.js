export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  !email
    ? "Email cannot be empty"
    : email.length > 34
    ? "Email cannot have more than 35 characters."
    : !emailRegex.test(email)
    ? "Invalid email format."
    : null;
}

export function validatePassword(password) {
  const passwordRegEx = /^(?=.*\d).{6,10}$/;

  !password
    ? "Password cannot be empty."
    : !passwordRegEx.test(password)
    ? "Between 6-10 characters only."
    : null;
}
