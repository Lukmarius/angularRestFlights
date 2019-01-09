export class Passenger {
  constructor(private firstname: String, private lastname: String) {}

  get firstName(): String {
    return this.firstname;
  }

  get lastName(): String {
    return this.lastname;
  }

  set firstName(firstName: String) {
    this.firstname = firstName;
  }

  set lastName(lastName: String) {
    this.lastname = lastName;
  }

  doSmth(val?: any): number {
    let a = 2;

    return 0 + val;
  }
}
