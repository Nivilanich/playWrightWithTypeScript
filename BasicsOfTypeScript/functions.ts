function greet(name: string, age: number): void {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

function add(a: number, b: number): number {
  return a + b;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}



// Call greet (already logs internally)
greet("Laksha", 35);

// Call add and log the return value
const sum = add(10, 20);
console.log("Sum:", sum);

// Call isEven and log result
const evenCheck = isEven(10);
console.log("Is Even:", evenCheck);

// Call getFullName and log result
const fullName = getFullName("Laksha", "T");
console.log("Full Name:", fullName);
