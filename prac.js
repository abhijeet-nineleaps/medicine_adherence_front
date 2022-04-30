const today = new Date();
const before = new Date();
before.setDate(today.getDate() - 5);

console.log(today.getDate()-before);
