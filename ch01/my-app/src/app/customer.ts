import { User } from './user';
{
}

const account: User | Customer = undefined;

if (account instanceof Customer) {
  const taxNo = account.taxNumber;
} else {
  const name = account.getFullnam();
}

class Customer extends User {
  taxNumber: number;

  //the super keyword in the customer class is used to call the constructor of its parent class (User). Since customer is extending User, it inherits its properties and methods.
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName);
  }
}
