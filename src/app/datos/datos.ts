export class Datos {
  id: number;
  name: string;
  lastName: string;
 email: string;
 password: string;

public constructor(id: number, name: string, lastName: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;   
    this.email = email;
    this.password = password;
  }
}
