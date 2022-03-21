const random = [];
for (let i=0; i<10; i++){
    random [i] = Math.floor(Math.random() * 51);
}
console.log(random);
random.sort(function(a, b){return b-a});
console.log(random);
const three = random.slice(0,3);
console.log(three);
const multiply = three.reduce((total, amount) => total * amount);
console.log(multiply);