let names = ['geert', 'tim', 'sofie'];

let upperCaseNames = names.map( (n) => n.toUpperCase() );
console.log(upperCaseNames);

let longNames = names.filter( (n) => n.length > 3 );
console.log(longNames);

let joinedNames = names.reduce( (result, n) => result + n, "" );
console.log(joinedNames);

