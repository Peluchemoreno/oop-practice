const cars = [
  {
    make: 'BMW',
    model: '328i',
    color: 'White',
    price: 1000,
    isUsed: false,
    miles: 10_000,
    src: 'https://images.unsplash.com/photo-1646987001348-a10f81886354?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    make: 'Chevrolet',
    model: 'Camaro',
    color: 'Black',
    price: 1500,
    isUsed: true,
    miles: 10_000,
    src: 'https://images.unsplash.com/photo-1615769516664-ca7302760b23?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    make: 'Mercedes',
    model: 'AMG-GT',
    color: 'Yellow',
    price: 2000,
    isUsed: false,
    miles: 10_000,
    src: 'https://images.unsplash.com/photo-1501066927591-314112b5888e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    make: 'Jeep',
    model: 'Wrangler',
    color: 'Red',
    price: 1000,
    isUsed: false,
    miles: 10_000,
    src: 'https://images.unsplash.com/photo-1591738802175-709fedef8288?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    make: 'Nissan',
    model: 'Juke',
    color: 'Silver',
    price: 1000,
    isUsed: false,
    miles: 10_000,
    src: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    make: 'Ferrari',
    model: '458',
    color: 'Red',
    price: 1000,
    isUsed: false,
    miles: 10_000,
    hasNitro: true,
    src: 'https://images.unsplash.com/photo-1630312465536-5c6b1f76dc3f?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
  
]

const cardContainer = document.querySelector('.info__container');



class Car {
  constructor(data, selector){
    this._make = data.make;
    this._model = data.model;
    this._color = data.color;
    this._price = data.price;
    this._miles = data.miles;
    this._isUsed = data.isUsed;
    this._src = data.src;
    this._selector = selector;
  }

  _getTemplate(selector){
    const template = document.querySelector('.card-template').content.querySelector(selector).cloneNode(true);
    return template
  }

  _generateCard(){
    this._template = this._getTemplate('.card');

    const imageBackground = this._template.querySelector('.card__image');
    imageBackground.style.backgroundImage= `url(${this._src})`;

    const cardTitle = this._template.querySelector('.card__title');
    cardTitle.textContent = `${this._make} ${this._model}`;

    const make = this._template.querySelector('.card__table-data-type_make-description')
    make.textContent = this._make;

    const model = this._template.querySelector('.card__table-data-type_model-description');
    model.textContent = this._model;

    const color = this._template.querySelector('.card__table-data-type_color-description');
    color.textContent = this._color;

    const miles = this._template.querySelector('.card__table-data-type_miles-description');
    miles.textContent = this._miles;

    const used = this._template.querySelector('.card__table-data-type_used-description');
    this._isUsed ? used.textContent = 'Yes' : used.textContent = 'No';

    const price = this._template.querySelector('.card__table-data-type_price-description');
    price.textContent = `$${this._price}`;

    
    return this._template;
  }

  _start(){
    console.log(`${this._make} ${this._model} starts`)
  }

  _stop(){
    console.log(`${this.make} ${this._model} stops`)
  }

  displayInfo(){
    console.log(`${this._color} ${this._make} ${this._model} | Price: $${this._price} | Mileage: ${this._miles} | `)
  }

}


class SuperCar extends Car {
  constructor(data){
    super(data);
    this._hasNitro = true;
  }

  displayInfo(){
    super.displayInfo();
    console.log(`this car has nitro`)
  }
}

function renderInfo(cars){
  cars.forEach(car =>{
      const theCar = car.hasNitro ? new SuperCar(car) : new Car(car)
      const carElement = theCar._generateCard();

      cardContainer.append(carElement);

  })

}

renderInfo(cars)