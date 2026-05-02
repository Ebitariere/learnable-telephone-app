class caller{
    constructor(print){
        this.print= print;
    }

    notify(phoneNumber){
        this.print(phoneNumber);
    }
}

class telephone{
    constructor() {
        this.phoneNumbers= new Set();
        this.observers = [];
    }

    addPhoneNumber(number){
        this.phoneNumbers.add(number);
    }
    removePhoneNumber(number){
        this.phoneNumbers.delete(number)
    }

    dialPhoneNumber(number){
        if(this.phoneNumbers.has(number)){
            console.log(`---Dailing ${number}---`);
            this.notifyObserver(number);
        } else{
            console.log(`Error: ${number} must be added before dialing`)
        }
    }

     
// OBSERVERS
    addObserver(observer){
        this.observers.push(observer)
    }

    removeObserver(observer){
        this.observers= this.observers.filter(current => current !== observer);
    }

    notifyObserver(number){
        this.observers.forEach(observer => observer.notify(number));
    }
}

const myPhone = new telephone();
const current1 = new caller((num) => console.log(num));
const current2 = new caller ((num) => console.log (`Now Dialling ${num}`));

myPhone.addObserver(current1);
myPhone.addObserver(current2);

myPhone.addPhoneNumber("2347023232");
myPhone.dialPhoneNumber("2347023232");