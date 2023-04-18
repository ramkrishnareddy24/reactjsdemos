function stu(){
    this.name = 'Jack',
    this.age = 20,

    this.sayName = function(){
        console.log(this.age);
        let inFun = () => {console.log(this.age);}
    }
    // inFun();
}

var x = new stu();
x.sayName();