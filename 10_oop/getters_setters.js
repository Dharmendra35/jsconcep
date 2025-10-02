class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }
  get password() {
    //return `${this.password}adc`;
    return `${this._password}adc`;
  }

  set password(value) {
    //this.password = value; //gives call stack size exceed
    //because they are in race condition
    this._password = value;
  }
}

const dharmendra = new User("dk@gmail.com", "3435");
console.log(dharmendra.password);
console.log(dharmendra.email);
