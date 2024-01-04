const { Triangle, Circle, Square } = require('./lib/shapes');
const userInputs = require('./lib/userInput');
const writeSVGFile = require('./lib/writefile');

async function generateLogo() {
    try {
        // Collect user input
        const userInput = await userInputs();

        // Create the appropriate shape based on user input
        let shape;
        switch (userInput.shape.toLowerCase()) {
            case 'circle':
                shape = new Circle(userInput.color, userInput.text, userInput.textColor);
                break;
            case 'triangle':
                shape = new Triangle(userInput.color, userInput.text, userInput.textColor);
                break;
            case 'square':
                shape = new Square(userInput.color, userInput.text, userInput.textColor);
                break;
            default:
                throw new Error('Invalid shape choice.');
        }

        // Generate SVG content
        const svgContent = shape.render();

        // Save SVG content to a file
        const fileName = 'logo.svg';
        writeSVGFile(fileName, svgContent);

        console.log(`Generated ${fileName}`);
    } catch (error) {
        console.error(`Error generating logo: ${error.message}`);
    }
}

generateLogo();