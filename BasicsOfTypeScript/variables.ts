let browserName: string = 'chromium';

let browseName1 = 'firefox'; // type inferred as string

const maxRetries: number = 3;

var isHeadless: boolean = false;    
const floatNumber: number = 3.14;
const welcomeMessage: string = "Hello, TypeScript!";
const isActive: boolean = true;

console.log(`Browser: ${browserName}`);
console.log(`Max Retries: ${maxRetries}`);
console.log(`Is Headless: ${isHeadless}`);
console.log(`Float Number: ${floatNumber}`);
console.log(`Welcome Message: ${welcomeMessage}`);
console.log(`Is Active: ${isActive}`);

//maxRetries = 5; // This will cause a compile-time error
isHeadless = true; // This is allowed
//isActive = false; // This is not allowed