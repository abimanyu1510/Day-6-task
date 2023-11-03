//QUESTION:3
//Write a “person” class to hold all the details.
class Person{
    constructor(name,age,gender,salary)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.salary=salary;
    }
}
const person1= new Person("abi",22,"male",67);
console.log(person1.name);
console.log(person1.age);
console.log(person1.gender);
console.log(person1.salary);
//-------------------------------
//4.write a class to calculate the uber price.

 class Uber{
  constructor(kilometer,price=25){
        this.kilometer= kilometer; 
        this.price=price;
}
get Price(){
    return this.kilometer*this.price
}
 }
 var uberprice=new Uber(5);
 var uberprice2=new Uber(4,59)
console.log(uberprice.Price);
console.log(uberprice2.Price)
//----------------------------------------------------
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get radiusCircle(){
return this.radius;
    }
    set radiusCircle(radius){
      this.radius=radius; 
    }
    get colorCircle(){
return this.color;
    }
    set colorCircle(color){
this.color=color;
    }
    get toString(){
        return`"Circle[radius=${this.radius},color=${this.color}]"`
    }
get areaCicle(){
return Math.PI * this.radius * this.radius; //pir2-formula
}
get circumferenceCircle(){
    return 2*Math.PI*this.radius; //2PIr-formula
}
}
var obj1=new Circle(1.0,"red");

console.log(obj1.radiusCircle);
obj1.radiusCircle=2.1;
console.log(obj1.radiusCircle)


console.log(obj1.colorCircle);
obj1.colorCircle="white";
console.log(obj1.colorCircle);

console.log(obj1.toString);

console.log(obj1.areaCicle);

console.log(obj1.circumferenceCircle)
//--------------------------------------------------------------------
//QUSETION:1
//a)
class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this .rating=rating;
    }
    get PG(){
        return this.rating;
    }
    }
var film=new Movie("LEO","SEVEN SCREEN STUDIO","PG08");
console.log(film.title);
console.log(film.studio);
console.log(film.rating);
//b)
var film1=new Movie("ENTHIRAN","SUN PRODUCTION")
console.log(film1.rating);
//c)
console.log(film.rating);
//d)
var film2=new Movie("KGF","HOMBALE FILMS","PG13");
console.log(film2.title);
console.log(film2.studio);
console.log(film2.rating);


