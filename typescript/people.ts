export interface Person {
  firstName: string;
  lastName: string;
  initials: string;
  age: number;
}

export const people = [
  { firstName: 'Per', lastName: 'Hornshøj-Schierbeck', initials: 'PHOR', age: 60 },
  { firstName: 'Rasmus', lastName: 'Vestergaard Hansen', initials: 'RASV', age: 30 }
];

export function getFullName(person: Person) {
  return `${person.firstName} ${person.lastName} (${person.initials})`;
}
