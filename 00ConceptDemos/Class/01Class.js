class Person{
    constructor(name){
        // this.name = name;
        this.setName(name);
    }

    getName(){
        return this.name;
    }

    setName(newName){
        newName = newName.trim();
        if(newName === ''){
            throw 'the name should not be empty'
        }
        this.name = newName;
    }
}

let person = new Person("Jhon Doe");
console.log(person);

person.setName('Mary');
console.log(person.getName());



