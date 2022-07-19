import { IUser } from "services/user";

const validEmail = (email: string) => {
  const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return (
    email.length < 50 &&
    !!email.match(regex)
  )
}

const validName = (name: string) => {
  const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return (
    name.length < 100 &&
    name.trim().length > 2 &&
    !!name.match(regex)
  )
}

export default (user: IUser, isNewUser: boolean) => {
  const { email, name, password, confirmPass } = user;
  const validations = [];
  validations.push(validEmail(email));
  validations.push(password.length > 5);
  isNewUser && validations.push(validName(name));
  isNewUser && validations.push(password === confirmPass);
  return validations.reduce((i, j) => i && j);
}
