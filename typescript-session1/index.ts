// primitive
let age = 20;
let firstName = 'Toto';
let nullable = null;
let unden = undefined;
let isClosed = true;

// non-primitive
const users: string[] = ['toto', 'tototo'];

type Department = 'IT' | 'BUS' | 'STAFF';

interface User {
  id: string;
  lastName: string;
  depart: Department;
}

const contact: User = {
  id: 'de8bcf76-e2d6-4930-8f91-73432a3ca2a1',
  lastName: 'A.',
  depart: 'BUS', // "IT", "BUS", "STAFF"
};
let anonymous: any = 'toto';
anonymous = 12;

function somme(a: number, b: number): number {
  return a + b;
}

/* 
class User {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}

const user1 = new User("Totyo", 10);
console.log(user1);
user1.setName("GDG Cloud Abidjan");
console.log(user1);
*/
