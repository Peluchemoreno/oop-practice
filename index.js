const animals = [
  {
    name: "Ruff",
    age: 2,
    coatColor: "Beige"
  },
  {
    name: "Brownie",
    age: 4,
    coatColor: "Brown"
  },
  {
    name: "Snow",
    age: 6,
    coatColor: "White"
  },
  {
    name: "Sunny",
    age: 5,
    coatColor: "Grey",
    isAggressive: true
  }
]


class Dog {
  constructor(data){
    this._name = data.name;
    this._age = data.age;
    this._coatColor = data.coatColor;
    this.isNeutured = false;
  }

  cut(){
    this.isNeutured = true;
  }

  bark(){
    console.log('woof')
  }

  getInfo(){
    console.log(`My name is ${this._name}! I am ${this._age} years old. I have a ${this._coatColor} coat.`);
  }

  happyBirthday(){
    this._age++
    console.log(`It's ${this._name}'s birthday! Now they are ${this._age} years old! Go ${this._name}!`)
  }
}

class Pitbull extends Dog {
  constructor(data){
    super(data);
    this.isAggressive = false;
  }
}


animals.forEach(animal=>{
  const dog = new Pitbull(animal);
  this._name = animal.name;
  this._age = animal.age;
  this._coatColor = animal.coatColor;
  console.log(dog)
})