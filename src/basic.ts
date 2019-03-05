class Human {
  public name: string
  public gender: string
  public age: number
  
  constructor(name: string, gender: string, age: number) {
    this.name = name
    this.gender = gender
    this.age = age
  }
}

const Kevin = new Human("Kevin", "Male", 25)

// Optional type available in TypeScript
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age} years old and you are a ${person.gender}!`
}

console.log(sayHi(Kevin))

export {}
