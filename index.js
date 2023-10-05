// Write your solution here!
const cats =[]
cats. push("Milo","Otis", "Garfield")
console.log(cats)

cats.push("Ralph")
console.log(cats)

cats.unshift("Bob")
console.log(cats)

cats.shift("Bob")
cats.splice(2,3,)
console.log(cats)

cats.shift("milo")
cats.push("Garfield")
console.log(cats)

cats.unshift("Milo")
const Broom=[...cats,"Broom"]
console.log(cats)
console.log(Broom)

const removeLastCat=[...cats,]
removeLastCat.pop("Garfield")
console.log(removeLastCat)
console.log (cats)

const removeFirstCat=[...cats]
removeFirstCat.shift("Milo")
console.log(removeFirstCat)
console.log (cats)
