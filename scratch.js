var dogNames = ["Max","Fido","Gizmo","Nala"]

//Test Cases
var testString1 = "Hello, my dog is Max, and they have purple eyes!"
//Expect ['Max']
console.log(dogNames.filter( (dog) => testString1.includes(dog) ))