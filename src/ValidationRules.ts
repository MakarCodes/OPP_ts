export const nameCheck = (name: string): boolean => {
  let value = /^[a-zA-Z]+$/;
  return value.test(name);
};

export const surnameCheck = (surname: string): boolean => {
  let value = /^[a-zA-Z]+$/;
  return value.test(surname);
};

export const isEmail = (email: string): boolean => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};