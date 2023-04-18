class Circle{
    static calcArea(radius){
        return Circle.PI*radius*radius;
    }
}
Circle.PI = 3.142;
console.log('PI ',Circle.PI);
console.log('Area ',Circle.calcArea(5));