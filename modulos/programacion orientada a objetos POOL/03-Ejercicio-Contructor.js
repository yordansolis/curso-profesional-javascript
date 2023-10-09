class Car {
    //contructor sirve para iniciar la clase
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date(); // This will work
        return date.getFullYear() - this.year; // año actual 
    }
    marca() {
     
        return this.name;
    }
}
//hereda
class Moto extends Car {
    constructor(name, year, modelo) {
        //con el metodo super() dr msnfs s llsmst rl construtor de la clase padre
        super(name, year);
        this.modelo = modelo;
    }
    moto() {
        return 'Tengu una ' + this.name + ' modelo ' + this.year + " Sdd  "+ this.modelo;
    }
}
MyMoto = new Moto("Bwi fi", 2017, "XXl");
console.log(MyMoto)
    //MyMoto.moto()
