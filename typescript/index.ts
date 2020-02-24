import { Person } from './people';

const coolPeople: Person[] = people;

console.log(coolPeople.map(p => getFullName(p)).join(', '));

/* --------------------- Exercise 2 -------------------------- */

// const crushinators: Crushinator[] = [
//   new Animal('Fido', 'dog', 12000), // Animal should default to land domain
//   new Animal('Polly', 'parrot', 300, 'air'),
//   new Animal('Willy', 'killer whale', 5000000, 'sea')
// ];

// const statements = crushinators.map(c => `${c.title} can${c.canCrushAMouse() ? '' : 'not'} chrush a mouse!`);

// console.log(statements);
