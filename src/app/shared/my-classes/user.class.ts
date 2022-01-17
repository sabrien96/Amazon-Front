export class UserData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  constructor(firstname: string, lastname: string, email: string, phone: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
  }
}