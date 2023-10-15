// Задача на классы и наследование: создайте базовый класс Shape (фигура), 
// который имеет методы для расчета площади и периметра. 
// Затем создайте подклассы, представляющие различные фигуры, такие как прямоугольник, круг и треугольник. 
// Реализуйте методы расчета площади и периметра для каждой фигуры.

class Shape {
    constructor() {
        this.name = "Shape"
    }

    calcS() { }     // методы оставляем пустыми, для перезаписи логики в дочерних классах

    calcP() { }
}

class Rectangle extends Shape {     // наследуемый класс для прямоугольника
    constructor(a, b) {
        super();                    // вызов родительского конструктора в классе Shape
        this.name = "rectangle";    // указание имени фигуры
        this.a = a;                 // указание длины фигуры
        this.b = b;                 // указание ширины фигуры
    }
    calcS() {
        return this.a * this.b              // вычисление площади для наследуемого класса прямоугольник
    }
    calcP() {
        return (this.a * 2) + (this.b * 2)  // вычисление периметра для наследуемого класса прямоугольник
    }
}

const someRect = new Rectangle(4, 7)    // создание прямоугольника с заданными значениями (длина / ширина)
console.log(`Площадь прямоугольника равна: ${someRect.calcS()}, периметр равен: ${someRect.calcP()}`)

class Circle extends Shape {
    constructor(radius) {
        super();
        this.name = "circle";
        this.radius = radius;           // указание радиуса фигуры
    }
    calcS() {
        return Math.PI * Math.pow(this.radius, 2)
    }
    calcP() {
        return (2 * Math.PI) * this.radius
    }
}

const someCirc = new Circle(3)      // создание круга с заданым радиусом
console.log(`Площадь круга равна: ${someCirc.calcS().toFixed(1)}, Периметра круга равна: ${someCirc.calcP().toFixed(1)}`)

class Triangle extends Shape {
    constructor(a, b, c) {
        super();
        this.name = "triangle";
        this.a = a;                     // указание длины первой стороны треугольника
        this.b = b;                     // указание длины второй стороны треугольника
        this.c = c;                     // указание длины третьей стороны треугольника
    }
    calcS() {
        // вычисление площади по формуле Герона. 
        const p = (this.a + this.b + this.c) / 2    // расчёт полупериметра треугольника 
        return Math.sqrt((p * (p - this.a) * (p - this.b) * (p - this.c)))
    }
    calcP() {
        return this.a + this.b + this.c
    }
}

const someTriangle = new Triangle(3, 5, 7)      // создание треугольника с заданной длинной сторон
console.log(`площадь треугольника равна: ${someTriangle.calcS().toFixed(1)}, периметр равен: ${someTriangle.calcP()}`)
