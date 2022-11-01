interface Person{
    speak: () => string;
}

class AmericanPerson implements Person{
    speak() {
        return "Hello"
    }
}

class DominicanPerson implements Person{
    speak() {
        return "klk"
    }
}

class PersonSpeak{

person;

constructor(person: Person){
    this.person = person
}

saySomething(){
 const result = this.person.speak()
 console.log(result)
}


}

//using dependency injection we can pass whatever dependency we want as long as implements the same interface. Example:

const speak = new PersonSpeak(new DominicanPerson())
speak.saySomething()

const secondSpeak = new PersonSpeak(new AmericanPerson())
speak.saySomething()