export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return "Email cannot be empty.";
  }

  if (email.length > 35) {
    return "Email cannot have more than 35 characters.";
  }

  if (!emailRegex.test(email)) {
    return "Invalid email format.";
  }

  // If all conditions are met, the email is considered valid
  return null;
}

export function validatePassword (password){
    const passwordRegEx = /^(?=.*\d).{6,10}$/;
    if (!password) {
        return "Password cannot be empty."
    }
    if(!passwordRegEx.test(password)){
        return "Password must have at least one number and be 6-10 characters long."
    }
    return null
}