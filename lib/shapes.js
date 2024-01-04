// Parent class Shape
class Shape {
    constructor(color, text, textColor){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(textColor){
        this.textColor = textColor;
    }
}

// Classes for the individual shapes 

// Triangle 
class Triangle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render(){ 
        return `<svg width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        <text x="150" y="100" font-size="24" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
    </svg>`;    }
}

const triangle = new Triangle('blue', 'ABC', 'white');

// Circle
class Circle extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render(){ 
        `<svg width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="150" y="100" font-size="24" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
    </svg>`;    }
}

const circle = new Circle('blue', 'ABC', 'white');

// Square
class Square extends Shape {
    constructor(color, text, textColor) {
        super(color, text, textColor);
    }
    render(){ 
        return `<svg width="300" height="200">
        <rect x="40" y="40" width="120" height="120" fill="${this.color}" />
        <text x="150" y="100" font-size="24" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
    </svg>`;    
}
}

const square = new Square('blue', 'ABC', 'white');

module.exports = { Triangle, Circle, Square };