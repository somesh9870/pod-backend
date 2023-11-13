export const userNameRegex = (name) => {
  const pattern = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
  return pattern.test(name);
};

export const emailRegex = (email) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
};
